import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Book } from "src/app/pages/books/books.component";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
  })
  export class CardComponent {
    @Input() book: Book;
    @Input() even: boolean;
    @Input() books: Book[];
    @Output() delete: EventEmitter<Book> = new EventEmitter<Book>();
  
   
  deleteCard() {
    const index = this.books.indexOf(this.book);
    if (index !== -1) {
      this.books.splice(index, 1);
      this.delete.emit(this.book);
      }
    }
  }