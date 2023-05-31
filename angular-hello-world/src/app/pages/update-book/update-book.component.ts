import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../books/books.component';
import { BookService } from 'src/app/shared/bookservice.service';


@Component({

  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})

export class UpdateBookComponent {
  updatedBook: Book = new Book(0, 0, '', '', '', 0, '');

  constructor(private bookService: BookService) {}

  updateBook() {
    this.bookService.updateBook(this.updatedBook);
  }
}