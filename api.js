const express = require("express");
const mongoose = require("mongoose");
const routerArticles = require("./router/articles");
const routerUtilisateurs = require("./router/utilisateurs");
const routerCommentaires = require("./router/commentaires");
const routerParametres = require("./router/parametres");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/articles", routerArticles);
app.use("/utilisateurs", routerUtilisateurs);
app.use("/commentaires", routerCommentaires);
app.use("/parametres", routerParametres);

const urlBDD = "mongodb+srv://ifocopa_dmin:azerty1234@cluster0-v0nsf.mongodb.net/test?retryWrites=true&w=majority";
const optionConnexion = {
    useNewUrlParser : true,
    useUnifiedTopology: true
};

mongoose.connect(urlBDD, optionConnexion)
    .then(function(){
        console.log("connexion reussie");

    })
    .catch(function(err){
        console.log(err);
    })

const port = process.env.PORT || 2200 ;

app.listen(port, function(){
    console.log("serveur lancé sur le port" + port);
});

