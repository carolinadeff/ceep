import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();

    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
    this.state = {filtroCategoria: "Remover Filtro"}


    // this.state = {
    //   notas: [],
    //   categorias: []
    // };
  }

  // criarNota(titulo, texto, categoria) {
  //   const novaNota = { titulo, texto, categoria };
  //   const novoArrayNotas = [...this.state.notas, novaNota];
  //   const novoEstado = {
  //     notas: novoArrayNotas,
  //   };
  //   this.setState(novoEstado);
  // }

  // deletarNota(indice){
  //   const arrayNotas = this.state.notas;
  //   arrayNotas.splice(indice, 1);
  //   this.setState({notas:arrayNotas})
  // }

  // criarCategoria(categoria){
  //   const novoArrayCategorias = [...this.state.categorias, categoria];
  //   this.setState({...this.state, categorias: novoArrayCategorias})
  // }

  selecionaCategoria(e){
    if(e.target.tagName === "LI") {
      this.setState({...this.state, filtroCategoria: e.target.textContent})
    }
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          criarNota={this.notas.adicionarNota.bind(this.notas)}
          categorias={this.categorias}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias}
            selecionaCategoria={this.selecionaCategoria.bind(this)}
          />
          <ListaDeNotas
            notas={this.notas}
            filtroCategoria={this.state.filtroCategoria}
          />
        </main>
      </section>
    );
  }
}

export default App;
