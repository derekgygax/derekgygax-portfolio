import { useTranslations } from "next-intl"

// components
import { Icon } from "../icon/Icon";

// data
import resume from '@/app/data/resume.json';

export const Resume: React.FC = () => {

  const t = useTranslations('Resume');

  return (
    <a href={resume.href} download>
      <div className="linkContainer flex flex-row">
        <span>{t('label')}</span>
        <div className="socialMediaIconXs4 ml-1">
          <Icon
            id={resume.icon.id}
            alt={resume.icon.alt}
          />
        </div>
      </div>
    </a>
  )
}