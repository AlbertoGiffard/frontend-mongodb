import { Component, Input, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-box-response',
  templateUrl: './box-response.component.html',
  styleUrls: ['./box-response.component.css']
})
export class BoxResponseComponent implements OnInit {
  @Input() response: String = "";

  constructor() { }

  ngOnInit(): void {
  }
}
