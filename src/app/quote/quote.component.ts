import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote (1, 'Fred', 'Live as if you were to die tomorrow. Learn as if you were to live forever.', 'Mahatma Gandhi', new Date (2021,7,16)),
    new Quote (2, 'Fred', 'Live as if you were to die tomorrow. Learn as if you were to live forever.', 'Mahatma Gandhi', new Date (2021,7,16)),
    new Quote (3, 'Fred', 'Live as if you were to die tomorrow. Learn as if you were to live forever.', 'Mahatma Gandhi', new Date (2021,7,16)),
    new Quote (4, 'Fred', 'Live as if you were to die tomorrow. Learn as if you were to live forever.', 'Mahatma Gandhi', new Date (2021,7,16)),
    new Quote (5, 'Fred', 'Live as if you were to die tomorrow. Learn as if you were to live forever.', 'Mahatma Gandhi', new Date (2021,7,16)),
    new Quote (6, 'Fred', 'Live as if you were to die tomorrow. Learn as if you were to live forever.', 'Mahatma Gandhi', new Date (2021,7,16))
  ];

  get sortQuotes(){
    return this.quotes.sort((a,b) =>{
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  }

  ngOnInit(): void {
  }

}
