import { Component, OnInit } from '@angular/core';
import {experienceInformation} from './experienceInformation';



@Component({
  selector: 'app-experience',
  template:  `<p>EXPERIENCE:</p>
<p>{{exp.experience[0]}}</p>
<p>{{exp.experience[1]}}</p>
<p>{{exp.experience[2]}}</p>`,

  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {


exp: experienceInformation={
	experience:["First Experience1","Second Experience2","Thirdth experience3"]
};


  constructor() { }

  ngOnInit(): void {
  }

}
