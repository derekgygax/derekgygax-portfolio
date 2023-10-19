import { Job } from "../job/Job"
import { Section } from "@/app/_layout/section/Section";

export const Experience: React.FC = () => {

  const d = [1, 2, 3, 4, 5, 6];
  return (
    <Section>
      <div>
        <h1>Experience</h1>
        {d.map((num, ind) => {
          return (
            <Job key={ind} />
          )
        })}
      </div>

    </Section>
  )
}
