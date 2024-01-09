import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

// logo
import logo from '@/public/assets/derekgygax_logo.jpg';

// data
import logoData from '@/app/data/logo.json';

export const Logo: React.FC = () => {

  const t = useTranslations("General.logo");

  return (
    <Link
      href={t("href")}
    >
      <div
        className='w-12 md:w-16 mr-2 md:mr-4'
        title={t("tooltip")}
      >
        <Image
          src={logo}
          alt={t("alt")}
          className='rounded'
        />
      </div>
    </Link>
  )
}
