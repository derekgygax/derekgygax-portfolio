import prisma from "../prisma";
import { getUserSkeleton } from "./user";

// USER IDENTIFICATION
const USER_EMAIL = process.env.USER_EMAIL;

export const getContactMeButtonTranslation = async () => {
  try {

    const buttonTranslations = await prisma.contact_me_button.findMany();
    const user = await getUserSkeleton();
    // TODO when you put in the locale it will change!!!
    return {
      ...buttonTranslations[0],
      tooltip: buttonTranslations[0].tooltip
        .replace("{USER_NAME}", `${user.firstName} ${user.lastName}`)
        .replace("{USER_EMAIL}", `${user.email}`)
    };

  } catch (err) {
    console.error("Error retrieving the Contact Me Button Translations");

    // Check if err is an instance of Error
    if (err instanceof Error) {
      console.error(err.message);
      throw new Error(`Failed to retrieve the Contact Me Button Translations: ${err.message}`);
    } else {
      // Handle cases where err is not an Error object
      console.error(err);
      throw new Error('An unknown error occurred');
    }
  }
}