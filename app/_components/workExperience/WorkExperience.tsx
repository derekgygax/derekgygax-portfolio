
// layouts
import { Section } from "@/app/_layouts/section/Section";

// components

// data
import workExperince from '../../data/workExperience.json';

export const WorkExperience: React.FC = () => {

  // REMEMBER TO SEPARATE OUT THE STUFF FOR artemis BY PROJECT

  return (
    <div id="workExperience">
      <Section>
        <div>
          <h1>Experience</h1>
          {workExperince.map((company) => {
            return (
              <div key={`workExprience_${company.id}`}></div>
            );
          })}
        </div>
      </Section>
    </div>
  )
}
