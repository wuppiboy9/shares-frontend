import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private routeSub: Subscription;
  public sheetDetail: any; //@TODO: create model

  constructor(private route: ActivatedRoute) {
    this.routeSub = new Subscription;
   }

   ngOnInit() { 
    this.routeSub = this.route.params.subscribe(params => {
      const sheetParam = params['id'];
      if (isNaN(sheetParam)) return;
      
      const sheetNum = parseInt(sheetParam);
      if (sheetNum < 1) return; 
      
      //this.sheetDetail = apiService.getDetail(sheetNum); @TODO
    });
  }

}
