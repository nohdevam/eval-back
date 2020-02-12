const mongoose = require("mongoose");
const Joi = require("@hapi/joi")
.extend(require("@hapi/joi-date"));



const schemaArticles = mongoose.Schema({
    titre : String,
    contenu : String,
    dt_publication : {type : Date , default : Date.now },
    nom_auteur : String,
    categories : [String],
    email_auteur : String,
    est_publie : Boolean
});

const Articles = mongoose.model("articles", schemaArticles);

const schema = Joi.object({
    titre : Joi.string().min(3).max(100).required(),
    contenu : Joi.string().min(20).max(500).required(),
    nom_auteur : Joi.string().min(3).max(255).required(),
    categories : Joi.array().items(Joi.string()),
    email_auteur : Joi.string().email().required(),
    est_publie : Joi.boolean().required()
});

module.exports.schema = schema;
module.exports.Articles = Articles;
