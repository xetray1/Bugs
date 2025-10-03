import { footerContent, socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="w-full flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-0">
        <p className="w-full md:w-1/3 text-sm md:text-base text-center md:text-left">
          {footerContent.termsText}
        </p>
        <div className="socials w-full md:w-1/3 flex justify-center">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              className="icon"
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${socialImg.name} profile`}
            >
              <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
            </a>
          ))}
        </div>
        <p className="w-full md:w-1/3 text-sm md:text-base text-center md:text-right">
          © {new Date().getFullYear()} {footerContent.owner} | {footerContent.rightsText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
