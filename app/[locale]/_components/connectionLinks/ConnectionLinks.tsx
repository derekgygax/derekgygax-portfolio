import { useTranslations } from "next-intl";

// components
import { Icon } from "../icon/Icon";

// layout
import { Section } from "../../_layouts/section/Section"

// styles
// import styles from './ConnectionLinks.module.scss';

// data
import connectionLinks from '@/app/data/connectionLinks.json';

export const ConnectionLinks: React.FC = () => {

  const t = useTranslations('ConnectionLinks');

  return (
    <Section>
      <div className={styles.iconsContainer}>
        <div className={styles.icons}>
          {connectionLinks.icons.map((icon) => {
            return (
              <a
                key={`footer_icon_${icon.id}`}
                target={icon.type === "link" ? "_blank" : "_self"}
                href={icon.href}
              >
                <div className={styles.icon}>
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
