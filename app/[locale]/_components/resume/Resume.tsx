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
      rel="noopener noreferrer"
      download
    >
      <div
        className="linkContainer flex flex-row"
        title={t('tooltip', { myName: me.name })}
      >
        <span>{t('label')}</span>
        <div className="socialMediaIconXs4 ml-1">
          <Icon
            id={resume.icon.id}
            isLink={true}
            showToolTip={false}
          />
        </div>
      </div>
    </a>
  )
}