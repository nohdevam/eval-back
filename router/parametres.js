const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const { Parametres , schema } = require("../model/parametres");


router.post("/", async function(req, res){
    const body = req.body;
   
    const verif = schema.validate(body);

    if(verif.error){
        res.status(400).send(verif.error.details[0].message);
        return ;
    }

    const parametres = new Parametres (body);
    const resultat = await parametres.save();
    res.send(resultat);
});


router.get("/", async function(req, res){
     
    const resultat = await Parametres.find() ;
    res.send(resultat);
});

router.get("/:id", async function(req, res){

    const id = req.params.id;

    const verifID = mongoose.Types.ObjectId.isValid(id);

    if(!verifID){
        res.status(400).send("id donné n'est pas conforme");
        return ;
    }
    //res.send(ve
    const resultat = await Parametres.find({_id : id});
    // si il n'y a pas de profil => 404 Not Found et stop 
    if(resultat.length === 0){
        res.status(404).send("aucun enregistrement avec l'id "+ id);
        return ;
    }
  
    res.send(resultat);
});

router.delete("/:id", async function(req, res){
    
    const id = req.params.id ;
    
    const verifID = mongoose.Types.ObjectId.isValid(id);
    
    if(!verifID){
        res.status(400).send("l'id transmis n'est pas conforme");
        return ;
    }
    
    const resultat = await Parametres.deleteOne({ _id : id});
    
    if(resultat.deletedCount === 0){
        res.status(404).send("il n'existe pas d'enregistrement avec l'id" + id);
        return ;
    }

    const reponse = await Parametres.find();
    res.send(reponse);
})

router.put("/:id", async function(req,res){

    const id = req.params.id ;
    
    const verifID = mongoose.Types.ObjectId.isValid(id);

    if(!verifID){
        res.status(400).send("id non conforme !");
        return ;
    }

    const body = req.body ;

    const verif = schema.validate(body); 

    if(verif.error){
        res.status(400).send(verif.error.details[0].message);
        return;
    }

    const resultat = await Parametres.findById(id);
    
    if(!resultat){
        res.status(404).send("aucun enregistrement trouvé pour l'id "+ id);
        return ;
    }


    resultat.Information = body.nom;
    

    const reponse = await resultat.save();

    res.send(reponse);

});

module.exports = router;