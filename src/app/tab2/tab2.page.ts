import { Component } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
	users: any;
	getAllUsers: any;

	constructor(public api: RestApiService) {	

		this.getAllUsers = async function() {
		    await this.api.getAllUsers().subscribe(res => {
			   	this.users = res;
			}, err => {
				console.log(err);
			}); 
		};

	}

	ionViewWillEnter(){
	  this.getAllUsers();
	}
}
