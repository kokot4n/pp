import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = "Jimmy";
  age:number = 18;
  onChanged(increased:any){
    increased==true?this.age++:this.age--;
  }
}
