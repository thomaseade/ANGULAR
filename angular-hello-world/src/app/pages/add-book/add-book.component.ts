import { Component } from '@angular/core';
import { BookService } from 'src/app/shared/bookservice.service';
import { Book } from 'src/app/models/book'; 

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  newBook: Book = new Book(0, 0, '', '', '', 0, '');


  constructor(private bookService: BookService) { }

  addBook() {
    this.bookService.add(this.newBook).subscribe(
      (response) => {
        console.log(response);
       
      },
    
    );
  }
}




