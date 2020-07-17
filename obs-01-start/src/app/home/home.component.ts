import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval, Subscription, Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
// interval(1000).subscribe(count=>{
//   console.log(count);
// })
const customObservable = Observable.create(observer=>{
  let count=0;
  setInterval(()=>{
observer.next(count);
if(count>3){
  observer.error(new Error('count is greater than 3'));
  
}
count++;
  },1000);
});
customObservable.subscribe(data=>{
  console.log(data);
});
  }

  ngOnDestroy(): void{
    this.firstObsSubscription.unsubscribe();
  }

}
