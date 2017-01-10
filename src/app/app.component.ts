import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  whatever = null;

  sayHi(subject: string) {
    let template = `Hi ${subject}`;
    alert(template);
  }
}
