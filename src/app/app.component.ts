import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  public title: string = 'Hello World';
  public counter:  number = 10;

increaseBy(value:number):void {
  this.counter += value
}

decreaceBy(value:number):void{
  this.counter += value
}

reset(){
    this.counter = 10
}

}
