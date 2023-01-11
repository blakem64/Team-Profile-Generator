import { Employee } from "./Employee";


export class Manager extends Employee{
 
  constructor(name, id , email , officeNumber){
    super(name, id, email); //call the constructor of the Employee
    this.officeNumber = officeNumber;
  
  }

  getRole(){
    return "Manager";
  }
}