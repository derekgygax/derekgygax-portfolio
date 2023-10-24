import { useTranslations } from "next-intl"

// layouts
import { Section } from "@/app/[locale]/_layouts/section/Section";

// data
import projects from '@/app/data/projects.json';

export const Projects: React.FC = () => {

  const t = useTranslations("Projects");

  return (
    <Section
      id={projects.id}
      title={t('title')}
    >
      <div></div>
    </Section>
  );
}
