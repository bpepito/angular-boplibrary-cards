import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-blog-card',
  template: `
  <div class="blog-card">
    <h2>{{title}}</h2>
    <p>By: {{author}}</p>
    <p class="description">{{description}}</p>
    <div class="comments-container">
      <ul>
      Comments:
        <li *ngFor="let item of comments">{{item}}</li>
      </ul>
    </div>
  </div>
`,
styles: [`
  .blog-card { 
    border: 2px solid #1812c9; 
    padding: 16px; 
    border-radius: 5px; 
  }
  
  .blog-card h2 {
    font-weight: bold;
    color: #0b0942;
    margin: 0;
  }

  .blog-card .description {
    color: #212426;
  }

  .comments-container {
    margin: 5px;
  }

  .comments-container ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .comments-container li {
    color: #76828a;
  }
`]
})

export class BlogCardComponent {
  @Input() title: string = '';
  @Input() author: string = '';
  @Input() description: string = '';
  @Input() comments: string[] = [];
}
