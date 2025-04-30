import { Component } from '@angular/core';

@Component({
  selector: 'app-livros',
  imports: [],
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.css'
})
export class LivrosComponent {
  livro = {
    titulo: "o senhor dos anéis",
    autoria: "J. R. R. Tolkien",
    imagem:"https://m.media-amazon.com/images/I/71ZLavBjpRL._SY425_.jpg"
}
}
