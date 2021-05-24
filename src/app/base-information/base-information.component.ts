import { Component, OnInit } from '@angular/core';
import {BaseInformation} from './BaseInformation';
import {ITEMS} from './mock-baseInformation-items';


@Component({
  selector: 'app-base-information',
  template: `
  
  <ul class="information">
		<li [style.fontSize]="'24px'" [style.color]="'blue'" *ngFor="let item of items">{{item.surname | uppercase}} {{item.name | uppercase}} {{item.patronomic | uppercase}} {{item.email | lowercase}} <!-- {{item.telephone}} --> {{item.city}} {{item.birthDate | date}}
		<p *ngIf="item.telephone.length > 0">
 		{{item.telephone.length == 1 ? item.telephone :item.telephone}}</p>
 			<p>
    			<img [style.width]="'200px'" src={{items[0].imageAdress}}/>
    		</p>
 		</li>
</ul>
<a href="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0">Моя ссылка номер 1</a><br/>
<a href="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0">Моя ссылка номер 2</a><br/>
<a href="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0">Моя ссылка номер 3</a><br/>`,
  styleUrls: ['./base-information.component.css']
})
export class BaseInformationComponent implements OnInit {
items = ITEMS;

	information: BaseInformation={
	surname:"Surname",
	name:"Name",
	patronomic:"Patronomic",
	email:"youremail@.gmail.com",
	telephone:["123456789"],
	city:"City",
	birthDate:"111",
	imageAdress:"111"
	};

  constructor() { }

  ngOnInit(): void {
  }

}
