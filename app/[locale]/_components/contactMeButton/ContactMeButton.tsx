import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';


// data
import contactMeButton from '@/app/data/contactMeButton.json';
import me from '@/app/data/me.json';

export const ContactMeButton: React.FC = () => {

  const t = useTranslations("ContactMeButton")

  const tooltip = t('tooltip', {
    myName: me.name,
    email: me.email
  });

  return (
    <Link
      className="link"
      href={`mailto:${me.email}`}
    >
      <div className="linkContainer" title={tooltip}>
        {t(`label`)}
      </div>
    </Link>
  )
}
