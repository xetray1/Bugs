import TitleHeader from "../components/TitleHeader";
import { aboutContent } from "../constants";

const About = () => {
  return (
    <section id="about" className="flex-center section-padding">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title={aboutContent.title} />

        <div className="grid-12-cols mt-16 xl:items-start">
          <div className="xl:col-span-7 space-y-6">
            <div className="border-glow card-border rounded-2xl p-8 md:p-10 flex flex-col gap-8">
              <div className="flex flex-wrap gap-3">
                {aboutContent.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 rounded-full border border-white/10 bg-black-200/70 text-xs uppercase tracking-[0.28em] text-white-50"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <p className="text-white-50 text-lg leading-relaxed">
                {aboutContent.description}
              </p>

              <ul className="space-y-4 text-white-50">
                {aboutContent.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-white/80" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {aboutContent.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg border border-white/10 bg-black-200/60 text-sm text-white-50"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={aboutContent.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-white/80"
                >
                  {aboutContent.primaryCta.text}
                </a>
                {aboutContent.secondaryCta && (
                  <a
                    href={aboutContent.secondaryCta.href}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-white-50 transition hover:border-white/40 hover:text-white"
                  >
                    {aboutContent.secondaryCta.text}
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="xl:col-span-5 space-y-6 mt-responsive xl:mt-0">
            <div className="border-glow card-border rounded-2xl p-8 md:p-10 space-y-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-white-50">
                  {aboutContent.corePhilosophyLabel}
                </p>
                <p className="text-white text-2xl font-semibold leading-snug">
                  {aboutContent.corePhilosophyStatement}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {aboutContent.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-glow rounded-xl border border-white/10 bg-black-200/60 p-6 text-center"
                  >
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white-50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-glow card-border rounded-2xl p-8 md:p-10">
              <p className="text-white-50 leading-relaxed italic">
                {aboutContent.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;