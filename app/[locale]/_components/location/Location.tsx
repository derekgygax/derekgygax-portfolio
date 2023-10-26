import { useTranslations } from 'next-intl';

// components
import { Icon } from '../icon/Icon';

// data
import location from '@/app/data/location.json';

export const Location: React.FC = () => {

  const t = useTranslations("Location");
  return (
    <div className="flex flex-row items-center">
      <div className="pr-1 w-5">
        <Icon
          id={location.icon.id}
        />
      </div>
      <div className="whitespace-nowrap">
        <span>{t("location")}</span>
      </div>
    </div>
  )
}
