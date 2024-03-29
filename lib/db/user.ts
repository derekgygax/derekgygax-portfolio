import prisma from "../prisma";
import { capitalizeFirstLetter } from "../utils";

// USER IDENTIFICATION
const USER_EMAIL = process.env.USER_EMAIL;

export const getUserSkeleton = async () => {
  try {
    const user = await prisma.users.findUniqueOrThrow({
      where: { email: USER_EMAIL },
      select: {
        first_name: true,
        middle_name: true,
        last_name: true,
        phone: true,
        email: true
      }
    });
    const firstName = capitalizeFirstLetter(user.first_name);
    const middleName = capitalizeFirstLetter(user.middle_name || '');
    const lastName = capitalizeFirstLetter(user.last_name);

    return {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      fullName: `${firstName} ${lastName}`,
      phone: user.phone,
      email: user.email
    }

  } catch (err) {
    console.error("Error retrieving the User");

    // Check if err is an instance of Error
    if (err instanceof Error) {
      console.error(err.message);
      throw new Error(`Failed to retrieve user: ${err.message}`);
    } else {
      // Handle cases where err is not an Error object
      console.error(err);
      throw new Error('An unknown error occurred');
    }
  }

}