
// layouts
import { Section } from "@/app/[locale]/_layouts/section/Section";

// components
import { Experience } from "../experience/Experience";

// data
import workExperincesSection from '../../../data/workExperiences.json';

// types
import { WorkExperience } from "../../types/experience";

export const WorkExperiences: React.FC = () => {

  // REMEMBER TO SEPARATE OUT THE STUFF FOR BY PROJECT in ALL JOBS
  // artemis and inSilico

  return (
    <Section id={workExperincesSection.id}>
      <div>
        <h1>Experience</h1>
        {workExperincesSection.experiences.map((experience: WorkExperience) => {
          return (
            <div key={`workExprience_${experience.id}`}>
              <Experience
                data={experience}
              />
            </div>
          );
        })}
      </div>
    </Section>
  )
}
