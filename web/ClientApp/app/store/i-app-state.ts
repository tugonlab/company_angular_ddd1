import { Skill } from "../models/Skill";
import { LanguageSkill } from "../models/LanguageSkill";
import { About } from "../models/About";
import { Goals } from "../models/Goals";
import { Hobby } from "../models/Hobby";
import { PersonalInfo } from "../models/PersonalInfo";
import { Certificate } from "tls";
import { Course } from "../models/Course";
import { Education } from "../models/Education";

export interface IAppState {
    resume:{
        skills:Skill[],
        languageSkill:LanguageSkill[],
        about:About,
        certificates:Certificate[],
        courses:Course[],
        educationList:Education[],
        goals:Goals,
        hobbies:Hobby[],
        personalInfo:PersonalInfo,
        


    }
}
