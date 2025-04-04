import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { search } from '../../../helpers/searchHelper';
import { getConfig } from '../../../helpers/configurationHelper';

@Component({
	selector: 'search-bar',
	imports: [FormsModule],
	templateUrl: './searchBar.component.html',
	styleUrls: ['./searchBar.component.scss'],
})
export class SearchBarComponent {
	searchvalue: string = '';
	placeholderText: string = 'Search...';

	constructor() {
		// set placeholder
		if (getConfig('preferedSearchEngine')) {
			this.placeholderText = 'search ' + getConfig('preferedSearchEngine');
		}
	}

	// call search from external file
	onSearch() {
		location.href = search(this.searchvalue);
	}
}
