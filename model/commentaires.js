const mongoose = require("mongoose");
const Joi = require("@hapi/joi")
.extend(require("@hapi/joi-date"));


const schemaCommentaires = mongoose.Schema({
    contenu : String,
    dt_publication : {type : Date , default : Date.now },
    nom_auteur : String
    
});

const Commentaires = mongoose.model("commentaires", schemaCommentaires);

const schema = Joi.object({

    contenu : Joi.string().min(5).max(500).required(),
    nom_auteur : Joi.string().min(3).max(255).required()
    
});

module.exports.schema = schema;
module.exports.Commentaires = Commentaires;
