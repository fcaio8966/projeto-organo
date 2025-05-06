export interface livro{
    titulo: string;
    autoria: string;
    imagem: string;
    favorito: boolean;
    genero: generoliterario;
}
export interface generoliterario{
    id:string;
    value: string;
    livros: livro []
}