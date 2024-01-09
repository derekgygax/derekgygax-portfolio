import { Project } from "./Project";
import { ProjectSkeleton, ProjectTranlation } from "@/types/projects";
import { getPortfolioData } from "@/lib/db/portfolio";
import { User } from "./User";
import { Location } from "./Location";
import { Metadata } from "./Metadata";

export class Portfolio {
  private static userEmail = process.env.USER_EMAIL;
  public static user: User | null = null;
  private static projects: Project[] | null = null;

  // for caching
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

  public static async getUser(): Promise<User> {

    if (!Portfolio.user) {
      await Portfolio.populatePortfolio();
    }

    return Portfolio.user!;
  }

  public static async getUserTranslations() {
    if (!Portfolio.user) {
      await Portfolio.populatePortfolio();
    }

    return Portfolio.user?.getTranslations()!;
  }

  public static async getProjectsMetadata() {
    if (!Portfolio.projects) {
      await Portfolio.populatePortfolio();
    }

    return Portfolio.projects?.reduce((acc: { [key: string]: Metadata }, project: Project) => {
      acc[project.getName()] = project.getMetadata();
      return acc;
    }, {} as { [key: string]: Metadata });
  }

  public static async getUserFullName(): Promise<string> {
    if (!Portfolio.user) {
      await Portfolio.populatePortfolio();
    }
    return Portfolio.user?.getFullName()!;
  }

  public static async getUserLocation(): Promise<Location> {
    if (!Portfolio.user) {
      await Portfolio.populatePortfolio();
    }
    return Portfolio.user?.getLocation()!;
  }

  public static async getProjectSkeletons(): Promise<ProjectSkeleton[]> {

    if (!Portfolio.projects) {
      await Portfolio.populatePortfolio();
    }

    return Portfolio.projects?.map((project: Project) => {
      return project.getSkeleton();
    })!;
  }

  public static async getProjectTranslations(): Promise<Record<string, ProjectTranlation>> {
    if (!Portfolio.projects) {
      await Portfolio.populatePortfolio();
    }

    return Portfolio.projects?.reduce((accumulator: Record<string, ProjectTranlation>, project: Project) => {
      accumulator[project.getName()] = project.getTranslation();
      return accumulator
    }, {} as Record<string, ProjectTranlation>)!;
  }

  public static async getProjectNames(): Promise<string[]> {
    if (!Portfolio.projects) {
      await Portfolio.populatePortfolio();
    }

    return Portfolio.projects?.map((project: Project) => {
      return project.getName();
    })!;
  }



}