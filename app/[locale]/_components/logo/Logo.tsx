import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

// logo
import logo from '@/public/assets/derekgygax_logo.jpg';

// data
import logoData from '@/app/data/logo.json';
import me from '@/app/data/me.json';

export const Logo: React.FC = () => {

  const t = useTranslations("Logo");

  return (
    <Link
      href={logoData.href}
    >
      <div
        className='w-12 md:w-16 mr-2 md:mr-4'
        title={t("tooltip", { myName: me.name })}
      >
        <Image
          src={logo}
          alt={t("alt", { myName: me.name })}
          className='rounded'
        />
      </div>
    </Link>
  )
}
