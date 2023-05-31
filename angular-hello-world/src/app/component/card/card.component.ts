import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Book } from "src/app/pages/books/books.component";
import { BookService } from "src/app/shared/bookservice.service";

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

    constructor(private bookService: BookService) {}

    deleteCard() {
      this.bookService.deleteBook(this.book);
    }
   

    }