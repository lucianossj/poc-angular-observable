import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observable Single Example';

  subscriptionP1: Subscription;
  subscriptionP2: Subscription;
  subscriptionP3: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.subscribeP1();
    this.subscribeP2();
    this.subscribeP3();
  }

  public subscribeP1() {
    const input = document.getElementById('input');
    const keys = fromEvent(input, 'keyup');

    const p1 = document.getElementById('p1');

    this.subscriptionP1 = keys.subscribe((evt: KeyboardEvent) => {
      p1.append(evt.key);
    });
  }

  public unsubscribeP1() {
    const input = document.getElementById('input');
    const keys = fromEvent(input, 'keyup');

    const p1 = document.getElementById('p1');
    this.subscriptionP1.unsubscribe();
  }

  public subscribeP2() {
    const input = document.getElementById('input');
    const keys = fromEvent(input, 'keyup');

    const p2 = document.getElementById('p2');

    this.subscriptionP2 = keys.subscribe((evt: KeyboardEvent) => {
      p2.append(evt.key);
    });
  }

  public unsubscribeP2() {
    const input = document.getElementById('input');
    const keys = fromEvent(input, 'keyup');

    const p2 = document.getElementById('p2');
    this.subscriptionP2.unsubscribe();
  }

  public subscribeP3() {
    const input = document.getElementById('input');
    const keys = fromEvent(input, 'keyup');

    const p3 = document.getElementById('p3');

    this.subscriptionP3 = keys.subscribe((evt: KeyboardEvent) => {
      p3.append(evt.key);
    });
  }

  public unsubscribeP3() {
    const input = document.getElementById('input');
    const keys = fromEvent(input, 'keyup');

    const p3 = document.getElementById('p3');
    this.subscriptionP3.unsubscribe();
  }

}
