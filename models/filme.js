import conexao from '../config/conexao.js'

const Filme = conexao.Schema({
    titulo: {type:String, required:true},
    diretor:{type:String, required:true},
    ano:{type:Number, required:true},
    genero:{type:String, required:true},
    duracao:{type:String, required:true},
    classificacao:{type:String, required:true}
})

export default conexao.model('Filme',Filme)