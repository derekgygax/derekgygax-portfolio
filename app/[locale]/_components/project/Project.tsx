import Image, { StaticImageData } from 'next/image';
import { useTranslations } from "next-intl";
import { Link } from '@/navigation';

// components
import { ProjectConfig, Technology } from "../../../../types/projects";

import { Icon } from '../icon/Icon';

type ProjectProps = {
  name: string;
  image: StaticImageData;
  isCurrenProject: boolean;
  website: string;
  technologies: Technology[]
}

export const Project: React.FC<ProjectProps> = ({
  name,
  image,
  isCurrenProject,
  website,
  technologies
}) => {

  const t_project = useTranslations(`Project.${name}`);

  return (
    <Link
      target={!isCurrenProject ? "_blank" : "_self"}
      // target={data.hasWebsite && !data.isThisProject ? "_blank" : "_self"}
      href={website}
    >
      <article
        className="group h-full my-2 md:my-0 rounded-2xl hover:bg-secondary-bg transition duration-300 ease-in-out"
        title={t_project("projectLink.tooltip")}
      >
        <div className="p-2 h-full">
          <div className="h-full border border-tertiary-bg rounded-xl flex flex-col hover:border-quaternary-bg transition duration-300 ease-in-out">
            <div>
              <Image
                src={image}
                alt={t_project('imgAlt')}
                className="w-full h-full rounded-t-xl"
              />
            </div>
            <div className="flex flex-col justify-between box-border p-4 bg-tertiary-bg w-full h-full rounded-b-xl">
              <header className="mt-4 mb-4">
                <h2 className="m-0 text-2xl">{t_project('title')}</h2>
                <h4 className="m-0 text-lg">{t_project('jobTitle')}</h4>
              </header>
              <div className="text-secondary-text">
                <p>{t_project('summary')}</p>
              </div>
              <footer className='pt-4'>
                <div className="flex flex-row flex-nowrap w-full">
                  {technologies.map((tech) => {
                    return (
                      <div
                        key={`project_${name}_tech_${tech.name}`}
                        className="w-9 p-2"
                      >
                        <Icon
                          id={tech.name}
                        />
                      </div>
                    );
                  })}
                </div>
                <div
                  className="inline-flex flex-row items-center pl-1 pr-2 py-1 rounded-lg group-hover:text-aqua-text"
                >
                  <div className='w-9'>
                    <Icon
                      id="website"
                      isLink={true}
                    />
                  </div>
                  <span className='text-lg'>{t_project("projectLink.label")}</span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
