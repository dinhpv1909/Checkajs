import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  peoples: any;
  constructor(private app : AppService) {}
    ngOnInit(): void {
      console.log("check ",this.app.peoples());
      this.app.peoples().subscribe((res :any) => {
        this.peoples = res;
    });
  }
}
