import { Skill } from './skill.model';

export class Developer {
  public lastName: string;
  public firstName: string;
  public age: number;
  public sexe: string;
  public bio: string;
  public skills: Skill[];

  constructor(lastName: string, firstName: string, age: number, gender: string, bio: string, skills: Skill[]) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.sexe = gender;
    this.bio = bio;
    this.skills = skills;

} }
