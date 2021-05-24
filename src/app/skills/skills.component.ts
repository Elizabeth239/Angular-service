import { Component, OnInit } from '@angular/core';

import {SkillsService} from './skills.service';

@Component({
  selector: 'app-skills',
  template: `
  <div>
  <table>
            <tr *ngFor="let item of items">
                <td>{{item}}</td>
            </tr>
        </table>
        </div>`,

  styleUrls: ['./skills.component.css'],
  providers: [SkillsService]
})


export class SkillsComponent implements OnInit  {

items: string[] = [];

   constructor(private skillsService: SkillsService){}

  ngOnInit():void {
  	this.items = this.skillsService.getData();
  }

}
