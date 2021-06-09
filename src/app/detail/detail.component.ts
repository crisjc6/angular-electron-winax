import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {WeapService} from "../shared/services/weap-service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router,
              private weapService: WeapService,

  ) {

  }

  goPlaces() {
    this.router.navigate(['/']);
  }
  openTestDocument(): void {
    this.weapService.openWeap();
  }


}
