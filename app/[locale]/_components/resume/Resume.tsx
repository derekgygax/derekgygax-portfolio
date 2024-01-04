import { useTranslations } from "next-intl"

// components
import { Icon } from "../icon/Icon";

// data
import me from '@/app/data/me.json';
import resume from '@/app/data/resume.json';

export const Resume: React.FC = () => {

  const t = useTranslations('Resume');

  return (
    <a
      href="/assets/DerekGygax_resume.pdf"
      target="_blank"
      aria-label={`Download ${me.name} Resume`}
      rel="noopener noreferrer"
      download
      className="buttonContainer flex flex-row text-base md:text-lg"
      title={t('tooltip', { myName: me.name })}
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