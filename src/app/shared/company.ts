export class Company {
  name: string;
  earnings: number;
  id: string;
  children: Array<Company>;
  parent: string;

  constructor(name:string){
    this.name = name;
    this.earnings = 0;
    this.id = null;
    this.parent = null;
    this.children = [];
  }
}
