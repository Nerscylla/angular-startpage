import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { search } from './searchHelper';

@Component({
  selector: 'search-bar',
  imports: [FormsModule],
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.scss'],
})
export class SearchBarComponent implements OnChanges {
  searchValue: string;
  constructor() {
    this.searchValue = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  onSearch() {
    location.href = search(this.searchValue);
  }
}
