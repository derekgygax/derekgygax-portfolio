import { useTranslations } from "next-intl"

// components
import { Icon } from "../icon/Icon";

// data
import resume from '@/app/data/resume.json';

export const Resume: React.FC = () => {

  const t = useTranslations('General.resume');

  return (
    <a
      href={t('href')}
      target="_blank"
      aria-label={t('tooltip')}
      rel="noopener noreferrer"
      download
      className="buttonContainer flex flex-row text-base md:text-lg"
      title={t('tooltip')}
    >
      {t('label')}
      <div className="md:socialMediaIconXs4 ml-1 items-center">
        <Icon
          id={resume.icon.id}
          isLink={true}
          showToolTip={false}
        />
      </div>
    </a>
  )
}