import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //variable declaration
  public dynamicDate!: String;
  public ispresent: boolean = false;
  public counter: any = ['-','-','-','-'];

  setCountDown () {
    //const array used to store the values dynamically
    const [Y, M, D ] = this.dynamicDate.split('-');
    //selected date by the user
    const choiceDate = new Date(+Y, +M - 1, +D);
    // checking whether the selected date is greator than present date
    if(choiceDate < new Date()) {
      this.ispresent = true
    } else {
      // math calculation
      const x = (choiceDate.getTime() - new Date().getTime())/1000;
      const DD = Math.floor(x / (60 * 60 * 24));
      const HH = Math.floor((x % (60 * 60 * 24)) / (60 * 60));
      const MM = Math.floor((x % (60 * 60)) / (60));
      const SS = Math.floor((x % (60)));
      // values are stored in a array
      this.counter = [DD,HH,MM,SS]
    }
  }
// primary method calling
  initializeCounter() {
    setInterval(() => {
      this.setCountDown()
    }, 1000)
  }

  constructor() { }

  ngOnInit(): void {
  }
}