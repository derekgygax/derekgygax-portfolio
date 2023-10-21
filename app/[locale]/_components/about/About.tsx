import { Section } from "@/app/[locale]/_layouts/section/Section";

// import data
import aboutSection from '@/app/data/about.json';

export const About: React.FC = () => {
  return (
    <Section id={aboutSection.id}>
      <div>About Me</div>
    </Section>
  )
}
