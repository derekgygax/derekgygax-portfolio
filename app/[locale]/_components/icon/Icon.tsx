import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image"

// icons
import angularIcon from '@/public/assets/icons/angular.svg';
import awsIcon from '@/public/assets/icons/aws.svg';
import djangoIcon from '@/public/assets/icons/django.svg';
import dockerIcon from '@/public/assets/icons/docker.svg';
import { DownloadIcon } from "./DownloadIcon";
import { EmailIcon } from "./EmailIcon";
import flaskIcon from '@/public/assets/icons/flask.svg';
import { GithubIcon } from "./GithubIcon";
import htmlIcon from '@/public/assets/icons/html.svg';
import javaIcon from '@/public/assets/icons/java.svg';
import javascriptIcon from '@/public/assets/icons/javascript.svg';
import { LinkedInIcon } from "./LinkedInIcon";
import mapPinIcon from '@/public/assets/icons/map-pin.svg';
import mysqlIcon from '@/public/assets/icons/mysql.svg';
import nextjsIcon from '@/public/assets/icons/nextjs.svg';
import { PhoneIcon } from "./PhoneIcon";
import pythonIcon from '@/public/assets/icons/python.svg';
import rIcon from '@/public/assets/icons/r.svg';
import reactIcon from '@/public/assets/icons/react.svg';
import reduxIcon from '@/public/assets/icons/redux.svg';
import sassIcon from '@/public/assets/icons/sass.svg';
import solrIcon from '@/public/assets/icons/solr.svg';
import tailwindIcon from '@/public/assets/icons/tailwind.svg';
import typescriptIcon from '@/public/assets/icons/typescript.svg';
import { WebsiteIcon } from "./WebsiteIcon";


// data
import me from '@/app/data/me.json';


type IconProps = {
  id: string;
  alt?: string | undefined;
  isLink?: boolean;
  showToolTip?: boolean;
  tooltip?: string | undefined;
}

export const Icon: React.FC<IconProps> = ({
  id,
  alt,
  isLink = false,
  showToolTip = true,
  tooltip
}) => {

  const icons: Record<string, StaticImageData> = {
    angular: angularIcon,
    aws: awsIcon,
    django: djangoIcon,
    docker: dockerIcon,
    flask: flaskIcon,
    html: htmlIcon,
    java: javaIcon,
    javascript: javascriptIcon,
    mappin: mapPinIcon,
    mysql: mysqlIcon,
    nextjs: nextjsIcon,
    python: pythonIcon,
    r: rIcon,
    react: reactIcon,
    redux: reduxIcon,
    sass: sassIcon,
    solr: solrIcon,
    tailwind: tailwindIcon,
    typescript: typescriptIcon,
  };

  const iconsLinked: Record<string, React.FC> = {
    download: DownloadIcon,
    email: EmailIcon,
    github: GithubIcon,
    linkedIn: LinkedInIcon,
    phone: PhoneIcon,
    website: WebsiteIcon
  }

  const t = useTranslations("Icons");

  alt = alt ? alt : t(`${id}.alt`, {
    email: me.email,
    myName: me.name,
    phone: me.phone
  });
  tooltip = tooltip ? tooltip : t(`${id}.tooltip`, {
    email: me.email,
    myName: me.name,
    phone: me.phone
  });

  const LinkedComponent = isLink ? iconsLinked[id] : null;

  return (
    <div
      {...(showToolTip && { title: tooltip })}
    >
      {isLink && LinkedComponent ? (
        <LinkedComponent />
      ) : (
        <Image
          alt={alt}
          className="w-full h-full"
          src={icons[id]}
        />
      )}
    </div>
  )
}
