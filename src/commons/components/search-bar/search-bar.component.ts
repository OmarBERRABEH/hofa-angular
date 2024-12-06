import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  template: `
    <div class="search-container">
      <input
        type="text"
        [(ngModel)]="searchTerm"
        placeholder="Search..."
        class="search-input"
      />
      <app-button (click)="onSearch()">Search</app-button>
    </div>
  `,
  styles: [
    `
      .search-container {
        display: flex;
        gap: 0.5rem;
      }
      .search-input {
        padding: 0.5rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        flex: 1;
      }
    `,
  ],
})
export class SearchBarComponent {
  searchTerm = '';
  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchTerm);
  }
}
