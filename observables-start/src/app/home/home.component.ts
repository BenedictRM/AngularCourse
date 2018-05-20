import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Observer, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  obsSubscription : Subscription;
  intervalObsSubscription : Subscription;

  constructor() { }

  ngOnInit() {
    //Example of built in observable creation and usage
    const myNumbers = interval(1000)
    .pipe(map(
        (data: number) => {
          return data * 2;
        }
      )
    );

    this.intervalObsSubscription = myNumbers.subscribe(
      (num: number) => {
        console.log('emitted: ' + num);
      }
    );

    //Example of Observable built from scratch -- Observable type is the type of data getting emitted
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        //next() emits a normal data package
        observer.next('first package')
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.error('this does not work');
      }, 5000)
    });

    this.obsSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      (completed: string) => {
        console.log(completed)
      }
    )
  }

  ngOnDestroy(){
    //Always unsubscribe from Observables created from scratch
    this.obsSubscription.unsubscribe();
    this.intervalObsSubscription.unsubscribe();
  }
}
