import { footerLinks, socialMedia } from "../constants";
import footerLogo from "/assets/images/footer-logo.svg";
import copyrightSign from "/assets/icons/copyright-sign.svg";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] m-auto">
      <div
        className="flex justify-between items-start gap-20
      flex-wrap max-lg:flex-col"
      >
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer-logo" width={150} height={46} />
          </a>
          <p
            className="mt-6 text-base leading-7 font-[montserrat]
          text-white sm:max-w-sm"
          >
            Get shoes ready for the new term at your nearest Nike Store. Find
            your perfect size in-store. Get rewards.
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex justify-center items-center w-12 h-12
                bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4
                className="text-white font-[montserrat]
              text-2xl leading-normal font-medium mb-6"
              >
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.link}
                      className="text-white text-base leading-7
                    font-[montserrat] mt-4 block hover:text-slate-400"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex justify-between text-white mt-24 
        max-sm:flex-col max-sm:items-center"
      >
        <div
          className="flex flex-1 justify-start items-center font-[montserrat]
        cursor-pointer gap-2"
        >
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p className="font-[montserrat] cursor-pointer">
            Copyright. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
