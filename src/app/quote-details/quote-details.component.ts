import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quoty: Quote;
  @Output()isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }

  upvote(){
    this.quoty.likes +=1;
  }
  downvote(){
    this.quoty.dislikes +=1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
