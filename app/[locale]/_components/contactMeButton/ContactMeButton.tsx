import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';


// data
import contactMeButton from '@/app/data/contactMeButton.json';
import me from '@/app/data/me.json';

export const ContactMeButton: React.FC = () => {

  const t = useTranslations("ContactMeButton")

  return (
    <Link
      className="link"
      href={`${contactMeButton.href}${me.email}`}
    >
      <div className="linkContainer">
        {t(`label`)}
      </div>
    </Link>
  )
}
