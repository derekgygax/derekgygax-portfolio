// components
import { ContactMeButton } from "../contactMeButton/ContactMeButton";
import { Icon } from "../icon/Icon";
import { Location } from "../location/Location";
import { Logo } from '../logo/Logo';

// data
import socialMedia from '@/app/data/socialMedia.json';

export const Header: React.FC = () => {
  return (
    <header className="bg-primary-bg sticky h-header top-0 z-10 flex items-center">
      <div className="maxWidth w-full mx-auto px-4 grid grid-rows-1 grid-cols-3 md:grid-cols-6 md:gap-y-4">
        <div className='navSection col-start-1 col-end-3'>
          <Logo />
          <Location />
        </div>
        <div className="hidden md:navSection justify-around md:col-start-3 md:col-end-4">
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
                  <div className="iconLinkContainer socialMediaIcon">
                    <Icon
                      id={media.id}
                      isLink={true}
                    />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
        <div className="navSection col-start-3 col-end-4 md:col-start-6 md:col-end-7 justify-self-end">
          <ContactMeButton />
        </div>
      </div>
    </header>
  )
}
