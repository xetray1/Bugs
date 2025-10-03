import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";
import { projectShowcase } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full space-y-12">
        <TitleHeader title={projectShowcase.title} />
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img
                src={projectShowcase.primaryProject.imgPath}
                alt={projectShowcase.primaryProject.alt}
              />
            </div>
            <div className="text-content">
              <h2>{projectShowcase.primaryProject.title}</h2>
              <p className="text-white-50 md:text-xl">
                {projectShowcase.primaryProject.description}
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {projectShowcase.secondaryProjects.map((project, index) => (
              <div
                key={project.title}
                className="project"
                ref={index === 0 ? libraryRef : ycDirectoryRef}
              >
                <div
                  className={`image-wrapper ${project.backgroundClass ?? ""}`}
                >
                  <img src={project.imgPath} alt={project.alt} />
                </div>
                <h2>{project.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
