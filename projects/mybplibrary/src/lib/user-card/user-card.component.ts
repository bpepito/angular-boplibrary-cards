import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-user-card',
  template: `
    <div class="user-card">
      <h2>{{name}}</h2>
      <p>Email: {{email}}</p>
      <p>Bio: {{bio}}</p>
      <p>Active: {{active}}</p>
    </div>
  `,
  styles: [`
    .user-card { 
      border: 1px solid #dddddd; 
      padding: 16px; 
      border-radius: 5px; }
  `]
})
export class UserCardComponent {
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() bio: string = '';
  @Input() active: boolean = false;
}
