import { Component, OnInit } from '@angular/core';
import {RestulServiceService} from './restul-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'restful';
  constructor(private restfulService: RestulServiceService){}
  ngOnInit(): void {
    this.restfulService.getRestulTask(1).subscribe()
  }
}
