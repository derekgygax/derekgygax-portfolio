
import prisma from "../prisma";
import { capitalizeFirstLetter } from "../utils";

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

    const user = await prisma.users.findUniqueOrThrow({
      where: { email: USER_EMAIL },
      select: {
        first_name: true,
        last_name: true,
        phone: true,
        email: true
      }
    })

    const firstName = capitalizeFirstLetter(user.first_name);
    const lastName = capitalizeFirstLetter(user.last_name);

    return icons.reduce((
      acc: { [key: string]: { alt: string, tooltip: string } },
      icon
    ) => {
      console.log
      acc[icon.name] = {
        alt: icon.icon_alt.text
          .replace('{ICON_NAME}', icon.name)
          .replace('{USER_NAME}', `${firstName} ${lastName}`)
          .replace('{USER_EMAIL}', `${user.email}`)
          .replace('{USER_PHONE}', `${user.phone}`),
        // TODO The [0] is the language thing!!!
        tooltip: icon.icon_tooltip[0].tooltip
          .replace('{USER_NAME}', `${firstName} ${lastName}`)
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