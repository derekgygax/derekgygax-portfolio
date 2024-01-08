import { Project } from "./Project";
import { ProjectSkeleton, ProjectTranlation } from "@/types/projects";
import { getPortfolioData } from "@/lib/db/portfolio";
import { User } from "./User";

export class Portfolio {
  private static userEmail = process.env.USER_EMAIL;
  public static user: User | null = null;
  private static projects: Project[] | null = null;

  // for the caching
  private static populatePromise: Promise<void> | null = null;

  private static populatePortfolio(): Promise<void> {
    if (!Portfolio.populatePromise) {
      Portfolio.populatePromise = new Promise(async (resolve, reject) => {
        try {
          // Get the portfolio data
          const portfolioStuff = await getPortfolioData();

          // Load the user
          Portfolio.user = portfolioStuff.user;
          // Load the projects
          Portfolio.projects = portfolioStuff.projects;

          // Mark that the populate has finished
          resolve();
        } catch (error) {
          console.error("Error while populating the portfolio with data: ", error);
          // Reject the promise with the error
          reject(error);
        }
      })
    }
    return Portfolio.populatePromise;
  }

  // Check the object is populated before trying to use it
  private static async checkPopulated() {
    if (!Portfolio.user) {
      await Portfolio.populatePortfolio();
    }
  }


  public static async getUser(): Promise<User> {

    await Portfolio.checkPopulated();

    return Portfolio.user!;
  }

  public static async getProjectSkeletons(): Promise<ProjectSkeleton[]> {

    await Portfolio.checkPopulated();

    return Portfolio.projects?.map((project: Project) => {
      return project.getSkeleton();
    })!;
  }

  public static async getProjectTranslations(): Promise<Record<string, ProjectTranlation>> {

    await Portfolio.checkPopulated();

    return Portfolio.projects?.reduce((accumulator: Record<string, ProjectTranlation>, project: Project) => {
      accumulator[project.getName()] = project.getTranslation();
      return accumulator
    }, {} as Record<string, ProjectTranlation>)!;
  }

}