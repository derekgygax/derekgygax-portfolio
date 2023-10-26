import { useTranslations } from "next-intl";

// layouts
import { Section } from "@/app/[locale]/_layouts/section/Section"

// data
import contactMe from '@/app/data/contactMe.json';

// styles
import styles from './ContactMe.module.scss';

export const ContactMe: React.FC = () => {

  const t = useTranslations('ContactMe');

  return (
   
  )
}
