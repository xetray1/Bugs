const TitleHeader = ({ title, sub, className = "", badgeClassName = "" }) => {
  return (
    <div
      className={`flex flex-col items-center gap-4 md:gap-6 text-center mx-auto max-w-3xl md:py-4 py-3 ${className}`}
    >
      {sub && (
        <div className={`hero-badge ${badgeClassName}`}>
          <p>{sub}</p>
        </div>
      )}
      <div>
        <h1 className="font-semibold md:text-5xl text-3xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
