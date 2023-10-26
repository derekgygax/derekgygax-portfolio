import Image from "next/image";
import { useTranslations } from "next-intl";

// data
import aboutMe from '@/app/data/aboutMe.json';

// images
import meHandstand from '@/public/assets/meHandstand.jpg';
import { Resume } from "../resume/Resume";

export const AboutMe: React.FC = () => {

  const t = useTranslations('AboutMe');
  return (
    <section id={aboutMe.id}>
      <div className="section">
        <div className="pb-8">
          <h1 className="m-0 text-5xl font-bold pb-2">
            {t('name')}
          </h1>
          <h2 className="m-0 mt-1 font-semibold text-2xl">
            {t('jobTitles')}
          </h2>
        </div>
        {/* TODO THIS ISN"T RIGHT WITH THE IMAGE */}
        {/* TODO THIS ISN"T RIGHT WITH THE IMAGE */}
        {/* TODO THIS ISN"T RIGHT WITH THE IMAGE */}
        {/* TODO THIS ISN"T RIGHT WITH THE IMAGE */}
        {/* TODO THIS ISN"T RIGHT WITH THE IMAGE */}
        <div className="flex flex-row">
          <div className="w-full md:w-2/3 flex flex-col">
            <div className="text-xl text-secondary-text">
              <div className="w:full md:w-11/12">
                <p>{t("bio.work")}</p>
                <p>{t("bio.personal")}</p>
              </div>
            </div>
            <div className="self-start">
              <Resume />
            </div>
          </div>
          <div className="hidden md:block md:w-1/3">
            <Image
              src={meHandstand}
              alt={t("imageAlt")}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
