import Link from "next-intl/link";
import { useTranslations } from "next-intl";

// components
import { Icon } from "../icon/Icon";
import { Location } from "../location/Location";

// data
// import me from '@/app/data/me.json';
import aboutMe from '@/app/data/aboutMe.json';
import contactMe from '@/app/data/contactMe.json'
import projects from '@/app/data/projects.json';
import socialMedia from '@/app/data/socialMedia.json';

export const Header: React.FC = () => {

  const navSetionsIds = [
    aboutMe.id,
    projects.id,
  ];

  const t = useTranslations("Header");

  return (
    <header className="bg-primary-bg sticky h-header top-0 z-10 flex items-center">
      <div className="maxWidth mx-auto px-4 grid grid-rows-1 grid-cols-3 md:grid-cols-6 md:gap-y-4">
        <div className="navSection">
          <Location />
        </div>

        {/* This has a link to the home page
        Maybe bring this back in the future */}
        {/* <div className="navSection">
          <Link
            className="link"
            href="/"
          >
            <div className="linkContainer -ml-2">
              {me.name}
            </div>
          </Link>
        </div> */}
        <div className="hidden md:navSection justify-around md:col-start-2 md:col-end-4">
          {/* It's only one page so this may not be important for now */}
          {/* {navSetionsIds.map((sectionId) => {
            return (
              <Link
                key={`header_nav_${sectionId}`}
                className="link"
                href={`#${sectionId}`}
              >
                <div
                  className="linkContainer"
                >
                  {t(`navItems.${sectionId}.label`)}
                </div>
              </Link>
            )
          })} */}
        </div>
        <div className="hidden md:navSection md:col-start-5 md:col-end-6 justify-center">
          <div className="flex w-3/5 justify-between">
            {socialMedia.map((media) => {
              return (
                <a
                  key={`header_socialMediaIcon_${media.id}`}
                  target="_blank"
                  href={media.href}
                >
                  <div className="linkContainer socialMediaIcon ">
                    <Icon
                      id={media.id}
                      alt={media.alt}
                    />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
        <div className="navSection col-start-3 col-end-4 md:col-start-6 md:col-end-7 jsutify-self-end">
          <Link
            className="link"
            href={contactMe.href}
          >
            <div className="linkContainer">
              {t(`navItems.contact.label`)}
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
