// components
import { Icon } from "../icon/Icon";

// data
import connectionIcons from '@/app/data/connectionIcons.json';
import me from '@/app/data/me.json';

export const ConnectionIcons: React.FC = () => {

  return (
    <section>
      <div className="section flex justify-center pb-2">
        <div className="grid grid-rows-1 grid-cols-4 gap-y-2 md:gap-y-4 text-center justify-center w-2/3 md:w-2/5">
          {connectionIcons.icons.map((icon) => {

            let href = icon.href;
            if (icon.id === 'phone') {
              href = href.replace('{phone}', me.phone);
            } else if (icon.id === 'email') {
              href = href.replace('{email}', me.email);
            }

            return (
              <a
                key={`footer_icon_${icon.id}`}
                className="flex justify-center"
                target={icon.type === "link" ? "_blank" : "_self"}
                href={href}
              >
                <div className="iconLinkContainer socialMediaIconSm">
                  <Icon
                    id={icon.id}
                    isLink={true}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  )
}
