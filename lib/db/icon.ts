
import prisma from "../prisma";
import { capitalizeFirstLetter } from "../utils";
import { getUser } from "./user";

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

    const user = await getUser();

    return icons.reduce((
      acc: { [key: string]: { alt: string, tooltip: string } },
      icon
    ) => {
      console.log
      acc[icon.name] = {
        alt: icon.icon_alt.text
          .replace('{ICON_NAME}', icon.name)
          .replace('{USER_NAME}', `${user.firstName} ${user.lastName}`)
          .replace('{USER_EMAIL}', `${user.email}`)
          .replace('{USER_PHONE}', `${user.phone}`),
        // TODO The [0] is the language thing!!!
        tooltip: icon.icon_tooltip[0].tooltip
          .replace('{USER_NAME}', `${user.firstName} ${user.lastName}`)
          .replace('{USER_EMAIL}', `${user.email}`)
          .replace('{USER_PHONE}', `${user.phone}`),
      }
      return acc;
    }, {} as { [key: string]: { alt: string, tooltip: string } })

  } catch (err) {
    console.error("Error retrieving the Icon translations");
    console.error(err);
    // TODO THROW AN ERROR!!!
  }
}