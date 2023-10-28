import { useTranslations } from "next-intl";

// components
import { Icon } from "../icon/Icon";

// data
import connectionIcons from '@/app/data/connectionIcons.json';
import me from '@/app/data/me.json';

export const ConnectionIcons: React.FC = () => {

  const t = useTranslations('ConnectionIcons');

  return (
    <section>
      <div className="section flex justify-center pb-2">
        <div className="grid grid-rows-1 grid-cols-4 gap-y-2 md:gap-y-4 text-center justify-center w-2/3 md:w-2/5">
          {connectionIcons.icons.map((icon) => {

            let alt = t(`icons.${icon.id}.alt`);
            let href = icon.href;

            if (icon.id === 'phone' || icon.id === 'email') {
              alt = `${alt} ${me[icon.id]}`;
              href = `${href}${me[icon.id]}`;
            }

            return (
              <a
                key={`footer_icon_${icon.id}`}
                className="flex justify-center"
                target={icon.type === "link" ? "_blank" : "_self"}
                href={href}
              >
                <div className="linkContainer socialMediaIconSm">
                  <Icon
                    id={icon.id}
                    alt={alt}
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
