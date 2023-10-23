import { Section } from "@/app/[locale]/_layouts/section/Section";

// import data
import aboutSection from '@/app/data/aboutMe.json';

export const AboutMe: React.FC = () => {
  return (
    <Section id={aboutSection.id}>
      <div>About Me</div>
    </Section>
  )
}
