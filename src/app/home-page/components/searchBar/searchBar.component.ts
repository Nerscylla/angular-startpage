import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { search } from '../../../helpers/searchHelper';

@Component({
	selector: 'search-bar',
	imports: [FormsModule],
	templateUrl: './searchBar.component.html',
	styleUrls: ['./searchBar.component.scss'],
})
export class SearchBarComponent {
	searchvalue: string;
	constructor() {
		this.searchvalue = '';
	}

	onSearch() {
		location.href = search(this.searchvalue);
	}
}
