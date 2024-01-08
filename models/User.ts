export class User {
  private firstName: string;
  private middleName: string;
  private lastName: string;
  private email: string;
  private phone: string;

  constructor(
    {
      firstName,
      middleName,
      lastName,
      email,
      phone
    }:
      {
        firstName: string;
        middleName?: string;
        lastName: string;
        email: string;
        phone: string;
      }
  ) {
    this.firstName = firstName;
    this.middleName = middleName || '';
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }

  public getFirstName(): string {
    return this.firstName;
  }
}