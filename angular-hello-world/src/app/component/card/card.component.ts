import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Book } from "src/app/models/book"; 


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
  })
  export class CardComponent {
    @Input() book: Book;
    @Input() even: boolean;
    @Output() delete= new EventEmitter<number>();


  enviarId () {
    console.log(this.book.id_book)
   this.delete.emit(this.book.id_book)
  }
  }