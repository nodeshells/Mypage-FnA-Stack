import {SafeStyle} from '@angular/platform-browser';

export interface Skill {
  skilldata: SkillDetail[];
}

export interface SkillDetail{
  url: string;
  desc: string;
  skillid: string;
  skillname: string;
  star: number;
  experience: number;
}

export interface ViewSkillDetail {
  url: string;
  desc: string;
  skillid: string;
  skillname: string;
  star: SafeStyle;
  starRate: number;
  experience: number;
}
