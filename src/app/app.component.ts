import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  
  text = ' No server was created';

  onClick() 
  {
    this.text = ' Server was created';
  }
}
