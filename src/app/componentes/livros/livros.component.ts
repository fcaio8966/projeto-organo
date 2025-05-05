import { Component } from '@angular/core';
import { livro } from './livro';

@Component({
  selector: 'app-livros',
  imports: [],
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.css'
})
export class LivrosComponent {
  alternarfavorito(){
    this.livro.favorito = ! this.livro.favorito
  }
  livro: livro  = {
    titulo: "o senhor dos anéis",
    autoria: "J. R. R. Tolkien",
    favorito: false,
    genero:"aventura",
    imagem:"https://m.media-amazon.com/images/I/71ZLavBjpRL._SY425_.jpg"
}
}
