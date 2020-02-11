const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const schemaCommentaires = mongoose.Schema({
    contenu : String,
    dateDeCreation : Date,
    nomAuteur : String,
    
});

const Commentaires = mongoose.model("commentaires", schemaCommentaires);

const schema = Joi.object({

    contenu : Joi.string().min(20).max(500).required(),
    dateDeCreation : Joi.date().required(),
    nomAuteur : Joi.string().min(3).max(255).required(),
    
});

module.exports.schema = schema;
module.exports.Commentaires = Commentaires;
