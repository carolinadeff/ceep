import React, { Component } from 'react';
import './estilo.css'

class ListaDeCategorias extends Component {

    constructor(){
        super()
        this.state = {categorias: []}
        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias)
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias)
    }

    _novasCategorias(categorias){
        this.setState({categorias})
    }

    _handleEventoInput(event){
        if(event.key === "Enter") {
            const valorCategoria = event.target.value;
            this.props.categorias.adicionarCategoria(valorCategoria);
        }
    }
   
    render() { 
        
        return ( 
            <section className="lista-categorias">
            <ul onClick={this.props.selecionaCategoria} className="lista-categorias_lista">
                <li className="lista-categorias_item">Remover Filtro</li>
                {this.state.categorias.map((categoria, index) => {
                    return <li className="lista-categorias_item" key={index}>{categoria}</li>
                })}
                
            </ul>
            <input
                type="text" 
                placeholder="Insira uma categoria"
                className="lista-categorias_input"
                onKeyDown={this._handleEventoInput.bind(this)}
            />
            </section>
         );
    }
}
 
export default ListaDeCategorias;