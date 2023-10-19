
// layouts
import { Section } from "@/app/_layouts/section/Section";

// components

// data
import workExperince from '../../data/workExperiences.json';
import { Experience } from "../experience/Experience";

export const WorkExperiences: React.FC = () => {

  // REMEMBER TO SEPARATE OUT THE STUFF FOR BY PROJECT in ALL JOBS
  // artemis and inSilico

  return (
    <div id="workExperience">
      <Section>
        <div>
          <h1>Experience</h1>
          {workExperince.map((experience) => {
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
    </div>
  )
}
