import Genero from '../models/genero.js'

export default class GeneroController{

    constructor(caminhoBase='genero/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "add")
        }
        this.add = async(req, res)=>{
            await Genero.create({
                genero: req.body.genero
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await Genero.find({})
            res.render(caminhoBase + 'lst', {Generos:resultado})
        }
        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await 
            Genero.find({ nome: { $regex: filtro,
                $options: "i" }})
            res.render(caminhoBase + 'lst', {Generos:resultado})
        }


         this.openEdt = async(req, res)=>{
            const id = req.params.id
            console.log(id)
            const genero = await Genero.findById(id) 
            console.log(genero)
            res.render(caminhoBase + "edt", 
                {genero:Genero})
        }

        this.edt = async(req, res)=>{
        await Genero.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

         this.del = async(req, res)=>{
        await Genero.findByIdAndDelete(req.params.id)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

    }
}