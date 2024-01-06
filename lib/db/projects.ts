
// Constants for the user
const USER_EMAIL = process.env.USER_EMAIL;

export const getNamesInOrder = async () => {
  try {
    // Retrieve the project names 
    const userProjects = await prisma?.users.findUniqueOrThrow({
      where: { email: USER_EMAIL },
      include: {
        user_projects: {
          include: {
            projects: {
              select: {
                name: true,
                display_order: true
              },
            }
          }
        }
      }
    });

    const projectNames = userProjects?.user_projects
      .flatMap(up => up.projects)
      .sort((a, b) => a.display_order - b.display_order)
      .map(project => project.name);

    return projectNames;
  } catch (err) {
    console.error(err);
  }
}