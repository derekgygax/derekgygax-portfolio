import { useTranslations } from "next-intl";

// components
import { Icon } from "../icon/Icon";

// layout
import { Section } from "../../_layouts/section/Section"

// data
import connectionIcons from '@/app/data/connectionIcons.json';

export const ConnectionIcons: React.FC = () => {

  const t = useTranslations('ConnectionIcons');

  return (
    <Section>
      <div className="flex justify-center pb-6">
        <div className="grid grid-rows-1 grid-cols-4 col-gap-2 md:col-gap-4 text-center justify-center w-2/3 md:w-1/3">
          {connectionIcons.icons.map((icon) => {
            return (
              <a
                key={`footer_icon_${icon.id}`}
                className="flex justify-center"
                target={icon.type === "link" ? "_blank" : "_self"}
                href={icon.href}
              >
                <div className="linkContainer socialMediaIconSmaller">
                  <Icon
                    id={icon.id}
                    alt={t(`icons.${icon.id}.alt`)}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  )
}
