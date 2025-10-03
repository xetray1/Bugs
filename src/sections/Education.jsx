import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { educationCards, certificateItems, educationContent } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".timeline-card").forEach((card) => {
        gsap.from(card, {
          xPercent: -100,
          opacity: 0,
          transformOrigin: "left left",
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
      });

      gsap.utils.toArray(".timeline").forEach((line) => {
        gsap.set(line, { scaleY: 1, transformOrigin: "bottom bottom" });
        gsap.to(line, {
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: line,
            start: "top center",
            end: "70% center",
            onUpdate: (self) => {
              gsap.set(line, { scaleY: 1 - self.progress });
            },
          },
        });
      });

      gsap.utils.toArray(".expText").forEach((text) => {
        gsap.from(text, {
          opacity: 0,
          xPercent: 0,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: text,
            start: "top 60%",
          },
        });
      });

    },
    { scope: sectionRef }
  );

  return (
    <section
      id="education"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
      ref={sectionRef}
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title={educationContent.title} sub={educationContent.sub} />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {educationCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div>
                      <img src={card.imgPath} alt="education-img" />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="mt-3 text-white-50">{card.institution}</p>
                        <p className="my-5 text-white-50">🗓️&nbsp;{card.date}</p>
                        <p className="text-[#839CB5] italic">Highlights</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.highlights.map((highlight, index) => (
                            <li key={index} className="text-lg">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {certificateItems.length > 0 && (
          <div className="mt-24 space-y-10">
            <div className="flex flex-col items-center gap-3 text-center max-w-2xl mx-auto">
              <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">
                {educationContent.certificatesTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {certificateItems.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="border-glow certificate-card card-border rounded-xl p-8 flex flex-col gap-5 bg-black-100"
                >
                  <div className="overflow-hidden rounded-lg h-40 bg-black-200 flex items-center justify-center">
                    <img
                      src={item.imgPath}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <span className="text-[11px] uppercase tracking-[0.32em] text-white-50">
                      Verified Credential
                    </span>
                    <h4 className="text-white text-xl font-semibold leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-white-50 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-white-50 text-xs uppercase tracking-[0.3em]">
                      View credential
                      <span>→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
