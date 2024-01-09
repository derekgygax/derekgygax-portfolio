import Image from "next/image";
import { getTranslations } from "next-intl/server";

// components
import { Resume } from "../resume/Resume";

// data
import aboutMe from '@/app/data/aboutMe.json';

// images
import meHandstand from '@/public/assets/meHandstand.jpg';
import { Portfolio } from "@/models/Portfolio";

export const AboutMe: React.FC = async () => {

  const t = await getTranslations('AboutMe');
  const fullName = await Portfolio.getUserFullName();

  return (
    <section id={aboutMe.id}>
      <div className="section">
        <header className="pb-4 md:pb-8">
          <h1 className="m-0 text-5xl font-bold pb-2">
            {fullName}
          </h1>
          <h2 className="m-0 mt-1 font-medium text-2xl">
            {t('jobTitles')}
          </h2>
        </header>
        <div className="flex flex-row">
          <div className="w-full md:w-2/3 flex flex-col">
            <div className="w-full md:w-11/12 lg:text-xl text-secondary-text">
              <p className="pb-2">
                {t("bio.work")}
              </p>
              <p>
                {t("bio.personal")}
              </p>
            </div>
            <div className="self-start mt-2">
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
