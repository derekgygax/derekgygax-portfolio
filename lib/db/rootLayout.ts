import { Metadata } from "@/models/Metadata";
import { getUserSkeleton } from "./user";
import prisma from "../prisma";

// USER

export const getRootLayoutMetadata = async (): Promise<Metadata> => {
  try {

    const root_layout = await prisma.root_layout.findUniqueOrThrow({
      where: { name: 'RootLayout' },
      include: {
        metadata: {
          include: {
            opengraph_metadata: {
              select: {
                title: true,
                description: true
              }
            }
          }
        }
      }
    });

    const user = await getUserSkeleton();

    return new Metadata({
      title: root_layout.metadata.title,
      description: root_layout.metadata.description,
      keywords: root_layout.metadata.keywords,
      openGraph: {
        // TODO THIS IS FUCKED BECAUSE OF THE MULTIPLE LANGUAGES THING!!
        title: root_layout.metadata.opengraph_metadata[0].title
          .replace('{USER_FULL_NAME}', user.fullName),
        description: root_layout.metadata.opengraph_metadata[0].description
          .replace('{USER_FULL_NAME}', user.fullName)
      }
    });

  } catch (err) {
    console.error("Error retrieving the Root Layer Metadata Translations");

    // Check if err is an instance of Error
    if (err instanceof Error) {
      console.error(err.message);
      throw new Error(`Failed to retrieve the Root Layer Metadata Translations: ${err.message}`);
    } else {
      // Handle cases where err is not an Error object
      console.error(err);
      throw new Error('An unknown error occurred');
    }
  }
}