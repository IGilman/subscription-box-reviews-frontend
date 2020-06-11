import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  subscriptions: any[] = [];
  constructor(private service: SubscriptionService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.service.getAllItems().subscribe(response => {
      this.subscriptions = response;
      console.log(this.subscriptions);
    })
  };


}
