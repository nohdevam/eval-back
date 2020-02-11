const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const schemaUtilisateurs = mongoose.Schema({
    nom : String,
    prenom : String,
    email : String,
    password : String,
    role : String,
    estActif : Boolean
});

const Utilisateurs = mongoose.model("utilisateurs", schemaUtilisateurs);

const schema = Joi.object({
    nom : Joi.string().min(3).max(100).required(),
    prenom : Joi.string().min(3).max(100).required(),
    email : Joi.string().email().required(),
    password : Joi.string().alphanum().required(),
    role : Joi.string().required(),
    estActif : Joi.boolean().required()
});

module.exports.schema = schema;
module.exports.Utilisateurs = Utilisateurs;
