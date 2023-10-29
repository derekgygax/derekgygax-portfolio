import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image"

// icons
import angularIcon from '@/public/assets/icons/angular.svg';
import awsIcon from '@/public/assets/icons/aws.svg';
import djangoIcon from '@/public/assets/icons/django.svg';
import dockerIcon from '@/public/assets/icons/docker.svg';
import downloadIcon from '@/public/assets/icons/arrow-down-circle.svg';
import emailIcon from '@/public/assets/icons/mail.svg';
import flaskIcon from '@/public/assets/icons/flask.svg';
import githubIcon from '@/public/assets/icons/github.svg';
import htmlIcon from '@/public/assets/icons/html.svg';
import javaIcon from '@/public/assets/icons/java.svg';
import javascriptIcon from '@/public/assets/icons/javascript.svg';
import linkedInIcon from '@/public/assets/icons/linkedin.svg';
import mapPinIcon from '@/public/assets/icons/map-pin.svg';
import mysqlIcon from '@/public/assets/icons/mysql.svg';
import nextjsIcon from '@/public/assets/icons/nextjs.svg';
import phoneIcon from '@/public/assets/icons/smartphone.svg';
import pythonIcon from '@/public/assets/icons/python.svg';
import rIcon from '@/public/assets/icons/r.svg';
import reactIcon from '@/public/assets/icons/react.svg';
import reduxIcon from '@/public/assets/icons/redux.svg';
import sassIcon from '@/public/assets/icons/sass.svg';
import solrIcon from '@/public/assets/icons/solr.svg';
import tailwindIcon from '@/public/assets/icons/tailwind.svg';
import typescriptIcon from '@/public/assets/icons/typescript.svg';


// data
import me from '@/app/data/me.json';


type IconProps = {
  id: string;
  alt?: string | undefined;
  tooltip?: string | undefined;
  showToolTip?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  id,
  alt,
  tooltip,
  showToolTip = true
}) => {

  const icons: Record<string, StaticImageData> = {
    angular: angularIcon,
    aws: awsIcon,
    django: djangoIcon,
    docker: dockerIcon,
    download: downloadIcon,
    email: emailIcon,
    flask: flaskIcon,
    github: githubIcon,
    html: htmlIcon,
    java: javaIcon,
    javascript: javascriptIcon,
    linkedIn: linkedInIcon,
    mappin: mapPinIcon,
    mysql: mysqlIcon,
    nextjs: nextjsIcon,
    phone: phoneIcon,
    python: pythonIcon,
    r: rIcon,
    react: reactIcon,
    redux: reduxIcon,
    sass: sassIcon,
    solr: solrIcon,
    tailwind: tailwindIcon,
    typescript: typescriptIcon,
  };

  const t = useTranslations("Icons");

  alt = alt ? alt : t(`${id}.alt`);
  tooltip = tooltip ? tooltip : t(`${id}.tooltip`);


  if (id === 'phone') {
    alt = `${alt} ${me.phone}`;
    tooltip = `${tooltip} ${me.phone}`
  } else if (id === 'email') {
    alt = `${alt} ${me.email}`;
    tooltip = `${tooltip} ${me.email}`
  }

  return (
    <div
      className="z-10"
      {...(showToolTip && { title: tooltip })}
    >
      <Image
        alt={alt}
        className="w-full h-full"
        src={icons[id]}
      />
    </div>
  )
}
