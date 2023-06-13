import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
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
    this.bookService.edit(this.updatedBook).subscribe(
      (response) => {
        console.log(response);
      
      },
      (error) => {
        console.log(error);
       
      }
    );
  }
}