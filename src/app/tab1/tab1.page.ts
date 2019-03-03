import { Component } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  user = {}
  postUser: any;
  success: any;

  constructor(public api: RestApiService) {	

	this.postUser = async function() {
	    await this.api.postUser(this.user).subscribe(res => {
         this.success = res;
         alert('Calculation completed successfully!\nSee the result in "All" page')
		}, err => {
			console.log(err);
		}); 
	};
  }

  calculate() {
    this.postUser(this.user);
    this.user = {};
  }
}
