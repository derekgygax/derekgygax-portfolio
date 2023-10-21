import { Section } from "@/app/[locale]/_layouts/section/Section"

// data
import contactSection from '@/app/data/contact.json';

export const Contact: React.FC = () => {
  return (
    <Section id={contactSection.id}>
      <div>Contact</div>
    </Section>
  )
}
