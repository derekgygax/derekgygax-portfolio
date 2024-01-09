export class Location {
  public city: string;
  public stateAbbr: string;
  public stateFull: string;
  public countryAbbr: string;
  public countryFull: string;

  constructor({
    city,
    stateAbbr,
    stateFull,
    countryAbbr,
    countryFull
  }: {
    city: string,
    stateAbbr: string,
    stateFull: string,
    countryAbbr: string,
    countryFull: string
  }) {
    this.city = city;
    this.stateAbbr = stateAbbr,
      this.stateFull = stateFull,
      this.countryAbbr = countryAbbr,
      this.countryFull = countryFull
  }
}