import { useTranslations } from "next-intl";

// styles
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {

  const t = useTranslations('Footer');

  return (
    <footer className="pt-2 mb-20">
      <div className="maxWidth mx-auto px-4">
        <div className="text-center text-sm">
          <span>{`${t('copyright')}`}</span>
        </div>
      </div>
    </footer>
  )
}
