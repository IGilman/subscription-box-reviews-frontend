import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscription-reviews',
  templateUrl: './subscription-reviews.component.html',
  styleUrls: ['./subscription-reviews.component.css']
})
export class SubscriptionReviewsComponent implements OnInit {

  subscriptionReviews: any[] = [];

  constructor(private service: SubscriptionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      this.getSubscriptionReviews(response.id);
    })
  }

  getSubscriptionReviews(id: any) {
    this.service.getSubscriptionDetails(id).subscribe(response => {
      this.subscriptionReviews = response;
    })
  };

  routeWriteReviews(id: number) {
    this.router.navigate(["/write-reviews"], { queryParams: { id: id } })
  }
}
