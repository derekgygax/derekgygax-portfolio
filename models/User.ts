import { capitalizeFirstLetter } from "@/lib/utils";
import { Bio } from "./Bio";
import { Contact } from "./Contact";
import { Location } from "./Location";

export class User {
  private firstName: string;
  private middleName: string;
  private lastName: string;
  private email: string;
  private phone: string;
  private github: string;
  private linkedIn: string;
  private jobTitles: string[];
  private summary: string;
  private imgAlt: string;
  private bios: Bio[];
  private location: Location;
  private contacts: Contact[];

  constructor(
    {
      firstName,
      middleName,
      lastName,
      email,
      phone,
      github,
      linkedIn,
      jobTitles,
      summary,
      imgAlt,
      bios,
      location,
      contacts
    }:
      {
        firstName: string;
        middleName?: string;
        lastName: string;
        email: string;
        phone: string;
        github: string;
        linkedIn: string;
        jobTitles: string[];
        summary: string;
        imgAlt: string;
        bios: Bio[];
        location: Location;
        contacts: Contact[]
      }
  ) {
    this.firstName = firstName;
    this.middleName = middleName || '';
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.github = github;
    this.linkedIn = linkedIn;
    this.jobTitles = jobTitles;
    this.summary = summary;
    this.imgAlt = imgAlt;
    this.bios = bios;
    this.location = location;
    this.contacts = contacts;
  }

  public getEmail() {
    return this.email;
  }

  public getPhone() {
    return this.phone;
  }

  public getSkeleton() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email
    }
  }

  public getTranslations() {
    return {
      summary: this.summary,
      imageAlt: this.imgAlt,
      jobTitles: this.jobTitles.join(', '),
      bio: this.bios.reduce((
        acc: { [key: string]: string },
        bio
      ) => {
        acc[bio.type] = bio.text;
        return acc;
      }, {} as { [key: string]: string }),
    }
  }

  public getFullName() {
    return `${capitalizeFirstLetter(this.firstName)} ${capitalizeFirstLetter(this.lastName)}`
  }


  public getLocation() {
    return this.location;
  }

  public getContacts() {
    return this.contacts;
  }

  public setContacts(contacts: Contact[]) {
    this.contacts = contacts
  }
}