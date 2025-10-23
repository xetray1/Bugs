import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";
import { projectShowcase } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ProjectImageCarousel = ({
  images = [],
  alt,
  wrapperClassName = "",
  autoInterval = 5000,
}) => {
  const slides = Array.isArray(images) && images.length > 0 ? images : [""];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = slides.length;

  useEffect(() => {
    if (slideCount === 0) {
      setCurrentIndex(0);
      return;
    }

    if (currentIndex >= slideCount) {
      setCurrentIndex(0);
    }
  }, [currentIndex, slideCount]);

  useEffect(() => {
    if (slideCount <= 1) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    }, autoInterval);

    return () => clearTimeout(timer);
  }, [currentIndex, slideCount, autoInterval]);

  const showPrevious = () => {
    if (slideCount <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const showNext = () => {
    if (slideCount <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % slideCount);
  };

  const combinedWrapperClassName = [
    "image-wrapper",
    "group",
    wrapperClassName,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const currentImage = slides[currentIndex] ?? "";

  return (
    <div className={combinedWrapperClassName}>
      {currentImage ? (
        <>
          <div className="carousel-overlay" aria-hidden="true" />
          <img
            key={currentIndex}
            src={currentImage}
            alt={alt}
            className="carousel-image"
            loading="lazy"
          />
        </>
      ) : (
        <div className="w-full h-full rounded-xl bg-black-200" />
      )}
      {slideCount > 1 && (
        <>
          <button
            type="button"
            className="carousel-nav-btn carousel-nav-btn--left"
            onClick={showPrevious}
            aria-label="View previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-nav-btn carousel-nav-btn--right"
            onClick={showNext}
            aria-label="View next image"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  const renderProjectTitle = (title, link) =>
    link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        {title}
      </a>
    ) : (
      title
    );

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
            <ProjectImageCarousel
              images={projectShowcase.primaryProject.images}
              alt={projectShowcase.primaryProject.alt}
            />
            <div className="text-content">
              <h2>
                {renderProjectTitle(
                  projectShowcase.primaryProject.title,
                  projectShowcase.primaryProject.link
                )}
              </h2>
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
                <ProjectImageCarousel
                  images={project.images}
                  alt={project.alt}
                  wrapperClassName={project.backgroundClass ?? ""}
                  autoInterval={4500}
                />
                <h2>{renderProjectTitle(project.title, project.link)}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
