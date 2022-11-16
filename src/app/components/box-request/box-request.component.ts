import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-request',
  templateUrl: './box-request.component.html',
  styleUrls: ['./box-request.component.css']
})
export class BoxRequestComponent implements OnInit {
  @Input() query: String = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
