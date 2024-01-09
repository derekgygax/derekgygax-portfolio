
import prisma from "../prisma";
import { getUserSkeleton } from "./user";

// USER
const USER_EMAIL = process.env.USER_EMAIL;

export const getIconTranlastions = async () => {
  try {
    const icons = await prisma.icon.findMany({
      include: {
        icon_alt: true,
        icon_tooltip: true,
      },
    });

    const user = await getUserSkeleton();

    return icons.reduce((
      acc: { [key: string]: { alt: string, tooltip: string } },
      icon
    ) => {
      acc[icon.name] = {
        alt: icon.icon_alt.text
          .replace('{ICON_NAME}', icon.name)
          .replace('{USER_FULL_NAME}', `${user.fullName}`)
          .replace('{USER_EMAIL}', `${user.email}`)
          .replace('{USER_PHONE}', `${user.phone}`),
        // TODO The [0] is the language thing!!!
        tooltip: icon.icon_tooltip[0].tooltip
          .replace('{USER_FULL_NAME}', `${user.fullName}`)
          .replace('{USER_EMAIL}', `${user.email}`)
          .replace('{USER_PHONE}', `${user.phone}`),
      }
      return acc;
    }, {} as { [key: string]: { alt: string, tooltip: string } })

  } catch (err) {
    console.error("Error retrieving the Icons");

    // Check if err is an instance of Error
    if (err instanceof Error) {
      console.error(err.message);
      throw new Error(`Failed to retrieve icons: ${err.message}`);
    } else {
      // Handle cases where err is not an Error object
      console.error(err);
      throw new Error('An unknown error occurred');
    }
  }
}