const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const schemaParametres = mongoose.Schema({
    information : String,

});

const Parametres = mongoose.model("parametres", schemaParametres);

const schema = Joi.object({
    information : Joi.string().min(3).max(500).required(),
    
});

module.exports.schema = schema;
module.exports.Parametres = Parametres;
