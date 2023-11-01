import Image, { StaticImageData } from 'next/image';
import { useTranslations } from "next-intl";
import Link from 'next-intl/link';

// components
import { ProjectConfig } from "../../types/projects";

import { Icon } from '../icon/Icon';

type ProjectProps = {
  id: string;
  image: StaticImageData;
  data: ProjectConfig;
}

export const Project: React.FC<ProjectProps> = ({
  id,
  image,
  data,
}) => {

  const t_general = useTranslations('General');
  const t_project = useTranslations(`Project.${id}`);
  const t_projectGeneral = useTranslations(`Project.General`);

  const tooltip = data.hasWebsite ? t_projectGeneral('webLink.tooltip', { websiteName: data.title }) : t_projectGeneral('detailsLink.tooltip', { projectTitle: data.title })

  return (
    <Link
      target={data.hasWebsite && !data.isThisProject ? "_blank" : "_self"}
      href={data.website}
    >
      <div
        className="group h-full my-2 md:my-0 rounded-2xl hover:bg-secondary-bg transition duration-300 ease-in-out"
        title={tooltip}
      >
        <div className="p-2 h-full">
          <div className="h-full border border-tertiary-bg rounded-xl flex flex-col hover:border-quaternary-bg transition duration-300 ease-in-out">
            <div>
              <Image
                src={image}
                alt={t_project('imageAlt')}
                className="w-full h-full rounded-t-xl"
              />
            </div>
            <div className="flex flex-col justify-between box-border p-4 bg-tertiary-bg w-full h-full rounded-b-xl">
              <div className='pb-4'>
                <div className="mt-4 mb-4">
                  <h2 className="m-0 text-2xl">{data.title}</h2>
                  <h4 className="m-0 text-lg">{t_project('jobTitle')}</h4>
                </div>
                <div className="text-secondary-text">
                  <p>{t_project('summary')}</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row flex-nowrap w-full">
                  {data.technologies.map((tech) => {
                    return (
                      <div
                        key={`project_${id}_tech_${tech}`}
                        className="w-9 p-2"
                      >
                        <Icon
                          id={tech}
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
                  <span className='text-lg'>{data.hasWebsite ? t_general("viewWebsite") : t_general("viewDetails")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
