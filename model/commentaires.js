const mongoose = require("mongoose");
const Joi = require("@hapi/joi")
.extend(require("@hapi/joi-date"));

const schemaCommentaires = mongoose.Schema({
    contenu : String,
    dateDeCreation : Date,
    nomAuteur : String,
    
});

const Commentaires = mongoose.model("commentaires", schemaCommentaires);

const schema = Joi.object({

    contenu : Joi.string().min(5).max(500).required(),
    dateDeCreation : Joi.date().format('DD-MM-YYYY').utc(),
    nomAuteur : Joi.string().min(3).max(255).required(),
    
});

module.exports.schema = schema;
module.exports.Commentaires = Commentaires;
