import React, { Component } from 'react';
import './estilo.css'
import iconeFechar from '../../assets/img/fechar.png'

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

    _handleEventosCategorias(event){
        const categoria = event.target.textContent
        const id = event.target.id
        if(event.target.tagName === "IMG") {
            this.props.categorias.excluirCategoria(id)
        } else if(event.target.tagName === "LI") {
            this.props.selecionaCategoria(categoria)
        }
    }
   
    render() { 
        
        return ( 
            <section className="lista-categorias">
            <ul onClick={this._handleEventosCategorias.bind(this)} className="lista-categorias_lista">
                <li className="lista-categorias_item">Remover Filtro</li>
                {this.state.categorias.map((categoria, index) => {
                    return <div key={index} className="lista-categorias_item"><li className="lista-categorias_item" value={categoria.id}>{categoria.categoria}</li><img id={categoria.id} src={iconeFechar} alt="fechar"/></div>
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