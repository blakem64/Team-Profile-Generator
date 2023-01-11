import { Employee } from "./Employee";

export class engineer{

  constructor(name, id , email, github ){
    super(name, id, email);
    this.github = github;

  }

  getGithub(){
    return this.github;
  }

  getRole(){
    return "Engineer";
   
  }
}