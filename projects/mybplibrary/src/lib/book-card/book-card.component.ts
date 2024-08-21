import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-book-card',
  template: `
    <div class="book-card">
      <h2>{{name}}</h2>
      <p>Authors: {{authors}}</p>
      <p>ISBN: {{isbn}}</p>
    </div>
  `,
  styles: [`
    .book-card { 
      border: 1px solid #dddddd; 
      padding: 16px; 
      border-radius: 5px; }

    .book-card h2 {
    font-weight: bold;
    color: #0b0942;
    margin: 0;
  }
  `]
})
export class BookCardComponent {
  @Input() name: string = '';
  @Input() authors: string[] = [];
  @Input() isbn: string = '';
}
