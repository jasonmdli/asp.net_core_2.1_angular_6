import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _router: Router) {
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }
  onBack(): void {
    this._router.navigate(['/products']);
  }
}
