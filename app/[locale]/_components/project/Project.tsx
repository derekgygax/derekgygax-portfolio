import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from "next-intl";

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

  const t_general = useTranslations(`General`);
  const t_project = useTranslations(`Project.${id}`);

  return (
    <div
      className="my-4 md:my-0 rounded-2xl hover:bg-secondary-bg transition duration-300 ease-in-out"
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
              {data.website ? (
                <a target="_blank" href={data.website}>
                  <div className="px-2 py-1 inline-block rounded-lg text-sm hover:bg-quaternary-bg transition duration-300 ease-in-out">
                    <span> {t_general("website")}</span>
                  </div>
                </a>
              ) : (
                <div className="px-2 py-1 inline-block rounded-lg text-sm">
                  <span> {t_general("private")}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
