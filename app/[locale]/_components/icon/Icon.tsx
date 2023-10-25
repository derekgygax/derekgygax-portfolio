import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image"

// styles
import styles from './Icon.module.scss';

// icons
import githubIcon from '@/public/assets/icons/github.svg';
import linkedInIcon from '@/public/assets/icons/linkedin.svg';
import emailIcon from '@/public/assets/icons/mail.svg';
import phoneIcon from '@/public/assets/icons/smartphone.svg';
import downloadIcon from '@/public/assets/icons/arrow-down-circle.svg'
import angularIcon from '@/public/assets/icons/angular.svg';
import awsIcon from '@/public/assets/icons/aws.svg';
import djangoIcon from '@/public/assets/icons/django.svg';
import dockerIcon from '@/public/assets/icons/docker.svg';
import htmlIcon from '@/public/assets/icons/html.svg';
import javaIcon from '@/public/assets/icons/java.svg';
import javascriptIcon from '@/public/assets/icons/javascript.svg';
import mysqlIcon from '@/public/assets/icons/mysql.svg';
import nextjsIcon from '@/public/assets/icons/nextjs.svg';
import pythonIcon from '@/public/assets/icons/python.svg';
import rIcon from '@/public/assets/icons/r.svg';
import reactIcon from '@/public/assets/icons/react.svg';
import reduxIcon from '@/public/assets/icons/redux.svg';
import sassIcon from '@/public/assets/icons/sass.svg';
import solrIcon from '@/public/assets/icons/solr.svg';
import typescriptIcon from '@/public/assets/icons/typescript.svg';


type IconProps = {
  id: string;
  alt?: string;
}

export const Icon: React.FC<IconProps> = ({ id, alt }) => {

  const icons: Record<string, StaticImageData> = {
    angular: angularIcon,
    aws: awsIcon,
    django: djangoIcon,
    docker: dockerIcon,
    download: downloadIcon,
    email: emailIcon,
    github: githubIcon,
    html: htmlIcon,
    java: javaIcon,
    javascript: javascriptIcon,
    linkedIn: linkedInIcon,
    mysql: mysqlIcon,
    nextjs: nextjsIcon,
    phone: phoneIcon,
    python: pythonIcon,
    r: rIcon,
    react: reactIcon,
    redux: reduxIcon,
    sass: sassIcon,
    solr: solrIcon,
    typescript: typescriptIcon,
  };

  const t = useTranslations("Icons");

  return (
    <Image
      src={icons[id]}
      alt={alt ? alt : t(`${id}.alt`)}
      className={styles.icon}
    />
  )
}
