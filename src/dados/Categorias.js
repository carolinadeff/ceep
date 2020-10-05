import { lista, adiciona, exclui } from '../api/categorias'

export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos = [];
        this._init()
    }

    _init(){
        lista().then(categorias => categorias.forEach(categoria => {
            this.categorias.push(categoria)
            this.notificar()
        }))
    }

    inscrever(func){
        this._inscritos.push(func)
    }

    desinscrever(func){
        this._inscritos.filter(f => f !== func)
    }

    notificar(){
        this._inscritos.forEach(func => func(this.categorias))
    }

    adicionarCategoria(novaCategoria){
        adiciona(novaCategoria).then(() => {
            this.categorias.push(novaCategoria)
            this.notificar()
        })
    }

    excluirCategoria(id){
        console.log(this.categorias)
        exclui(id).then(() => {
            this.categorias = this.categorias.filter((item) => item.id !== id)
            this.notificar()
        })
    }
}