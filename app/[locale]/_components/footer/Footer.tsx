import { useTranslations } from "next-intl";
import { ConnectionIcons } from "../connectionIcons/ConnectionIcons";

export const Footer: React.FC = () => {

  const t = useTranslations('Footer');

  return (
    <footer className="pt-2 mb-20">
      <div className="maxWidth h-full mx-auto px-4">
        <ConnectionIcons />
        <div className="text-center text-sm">
          <span>{`${t('copyright')}`}</span>
        </div>
      </div>
    </footer>
  )
}
