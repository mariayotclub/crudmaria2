
import Filme from '../models/filme.js'

export default class FilmeController{

    constructor(caminhoBase='filme/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "add")
        }
        this.add = async(req, res)=>{
           
            await Filme.create({
                titulo: req.body.titulo,
                diretor:req.body.diretor,
                ano:req.body.ano,
                genero:req.body.genero,
                duracao:req.body.duracao,
                classificacao:req.body.classificacao
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await Filme.find({})
            res.render(caminhoBase + 'lst', {Filmes:resultado})
        }

         this.find = async(req, res)=>{
            const filtro = req.body.filtro;
             const resultado = await 
             Filme.find({ nome: { $regex: filtro, $options: "i" }})
            res.render(caminhoBase + 'lst', {Filmes:resultado})
                }
        
        this.openEdt = async(req, res)=>{
            const id = req.params.id
             console.log(id)
             const filme = await Filme.findById(id) 
             console.log(filme)
            res.render(caminhoBase + "edt", {filme:Filme})
         }
        
        
        this.edt = async(req, res)=>{
         await Filme.findByIdAndUpdate(req.params.id, req.body)
          res.redirect('/'+caminhoBase + 'lst');
                
         }
        
        this.del = async(req, res)=>{
         await Filme.findByIdAndDelete(req.params.id)
          res.redirect('/'+caminhoBase + 'lst');
                
         }
        

    }
}