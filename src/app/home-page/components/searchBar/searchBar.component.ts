import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { search } from '../../../helpers/searchHelper';

@Component({
	selector: 'search-bar',
	imports: [FormsModule],
	templateUrl: './searchBar.component.html',
	styleUrls: ['./searchBar.component.scss'],
})
export class SearchBarComponent implements OnChanges {
	searchvalue: string;
	constructor() {
		this.searchvalue = '';
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log('changes', changes);
	}

	onSearch() {
		location.href = search(this.searchvalue);
	}
}
