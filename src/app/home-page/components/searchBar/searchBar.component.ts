import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { search } from '../../../helpers/searchHelper';
import { getConfig } from '../../../helpers/configurationHelper';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'search-bar',
	imports: [FormsModule, CommonModule],
	templateUrl: './searchBar.component.html',
	styleUrls: ['./searchBar.component.scss'],
})
export class SearchBarComponent {
	// init
	searchvalue: string = '';
	placeholderText: string = 'Search...';
	searchButtonEnabled: boolean = true;

	constructor() {
		this.searchButtonEnabled =
			getConfig('searchButtonEnabled') == false ? false : true;
		// set placeholder
		if (getConfig('preferedSearchEngine')) {
			this.placeholderText = 'Search ' + getConfig('preferedSearchEngine');
		}
	}

	// call search from external file
	onSearch() {
		location.href = search(this.searchvalue);
	}
}
