import prisma from "../prisma";
import { getUserSkeleton } from "./user";

// TODO the href isn't a translation. it shouldn't go here but it makes it SO much easier and faster
// so bad practice but for now do it, wayyyy to much code to go around. and more memory usage
interface GeneralTranslation {
  href: string;
  label: string;
  tooltip: string;
  alt: string;
};

export const getGeneralTranslations = async () => {
  try {

    const generals = await prisma.general.findMany({
      include: {
        general_details: {
          select: {
            label: true,
            tooltip: true,
            alt: true
          }
        }
      }
    });
    const user = await getUserSkeleton();

    return generals.reduce((acc: { [key: string]: GeneralTranslation }, general) => {

      // TODO THE [0] FOR THE TRANSLATIONS!!
      acc[general.name] = {
        href: general.href.replace('{USER_EMAIL}', user.email),
        label: general.general_details[0].label,
        tooltip: general.general_details[0].tooltip.replace('{USER_FULL_NAME}', user.fullName).replace('{USER_EMAIL}', user.email),
        alt: general.general_details[0].alt?.replace('{USER_FULL_NAME}', user.fullName) || ''
      };

      return acc
    }, {} as { [key: string]: GeneralTranslation });

  } catch (err) {
    console.error("Error retrieving the General Translations");

    // Check if err is an instance of Error
    if (err instanceof Error) {
      console.error(err.message);
      throw new Error(`Failed to retrieve general translations: ${err.message}`);
    } else {
      // Handle cases where err is not an Error object
      console.error(err);
      throw new Error('An unknown error occurred');
    }
  }
}