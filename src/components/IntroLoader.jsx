import { useEffect, useRef, useState } from "react";

const IntroLoader = ({ isBooting, onComplete }) => {
  const shimmerRef = useRef(null);
  const exitTimeoutRef = useRef(null);
  const hasCompletedRef = useRef(false);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const phases = [
    "Compiling shaders",
    "Calibrating lighting",
    "Syncing assets"
  ];
  const [phaseIndex, setPhaseIndex] = useState(0);

  useEffect(() => {
    const shimmer = shimmerRef.current;
    if (!shimmer) return;

    let frame = 0;
    let rafId;

    const animate = () => {
      frame += 0.45;
      shimmer.style.setProperty("--rotate", `${frame}deg`);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (hasCompletedRef.current) {
          return 100;
        }

        if (isBooting) {
          const increment = prev < 65 ? 1.2 : prev < 84 ? 0.6 : 0.24;
          return Math.min(prev + increment, 96);
        }

        const eased = prev + (100 - prev) * 0.27;
        if (eased >= 99.4) {
          hasCompletedRef.current = true;
          setIsExiting(true);
          exitTimeoutRef.current = setTimeout(() => onComplete?.(), 420);
          return 100;
        }

        return eased;
      });
    }, 36);

    return () => clearInterval(intervalId);
  }, [isBooting, onComplete]);

  useEffect(() => {
    const cycleId = setInterval(() => {
      setPhaseIndex((prev) => (prev + 1) % phases.length);
    }, 900);
    return () => clearInterval(cycleId);
  }, [phases.length]);

  useEffect(() => {
    return () => {
      clearTimeout(exitTimeoutRef.current);
    };
  }, []);

  return (
    <div
      className={`loader-overlay ${isExiting ? "loader-overlay--exit" : ""}`}
      aria-live="polite"
      aria-busy="true"
      style={{ backgroundColor: "#050614" }}
    >
      <div className="loader-sheen" />
      <div className="loader-glow" />
      <div className="loader-grid" />
      <div className="loader-content">
        <div className="loader-orbit" ref={shimmerRef}>
          <span className="loader-orbit-ring" />
          <span className="loader-orbit-ring loader-orbit-ring--outer" />
          <span className="loader-node loader-node--one" />
          <span className="loader-node loader-node--two" />
          <span className="loader-node loader-node--three" />
          <span className="loader-core" />
        </div>
        <div className="loader-text">
          <p className="loader-title">Preparing portfolio experience</p>
          <p className="loader-subtitle">{phases[phaseIndex]}</p>
        </div>
        <div className="loader-progress" data-progress={Math.round(progress)}>
          <div className="loader-progress-bar" style={{ width: `${progress}%` }} />
          <span className="loader-progress-meter">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
};

export default IntroLoader;
