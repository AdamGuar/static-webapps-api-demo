import { Component } from '@angular/core';
import { HelloService } from 'src/app/service/hello.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent {
  private helloService: HelloService;
  public name: string = '';
  public greeting: string = '';

  constructor(helloService: HelloService) {
    this.helloService = helloService;
  }

  onGetGreeting() {
    this.helloService.getGreeting(this.name).subscribe((data)=>{
      console.log(data);
    });
  }


}
