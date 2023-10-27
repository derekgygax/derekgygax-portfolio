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
      className="border border-secondary-bg rounded-lg hover:border-tertiary-bg flex flex-col">
      <div>
        <Image
          src={image}
          alt={t_project('imageAlt')}
          className="w-full h-full rounded-t-lg"
        />
      </div>
      <div className="flex flex-col justify-between box-border p-4 bg-secondary-bg w-full h-full rounded-b-lg">
        <div>
          <div className="mt-4 mb-4">
            <h3 className="m-0">{data.title}</h3>
            <h4 className="m-0 mt-2">{t_project('jobTitle')}</h4>
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
              <div className="px-2 py-1 inline-block rounded-lg text-sm hover:bg-tertiary-bg">
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
  )
}
