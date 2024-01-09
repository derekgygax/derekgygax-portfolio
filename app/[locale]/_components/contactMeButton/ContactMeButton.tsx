import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';


// Portfolio
import { Portfolio } from '@/models/Portfolio';

export const ContactMeButton: React.FC = async () => {

  const t = await getTranslations(`General.contactMeButton`)

  return (
    <Link
      className="link"
      href={t("href")}
    >
      <div className="buttonContainer text-base md:text-xl" title={t('tooltip')}>
        {t(`label`)}
      </div>
    </Link>
  )
}
