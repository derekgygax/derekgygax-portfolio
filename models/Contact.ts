export class Contact {
  name: string;
  target: string;
  href: string;
  displayOrder: number;

  constructor(
    {
      name,
      target,
      href,
      displayOrder
    }: {
      name: string;
      target: string;
      href: string,
      displayOrder: number
    }
  ) {
    this.name = name;
    this.target = target;
    this.href = href;
    this.displayOrder = displayOrder;
  }
}