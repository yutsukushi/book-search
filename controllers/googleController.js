const axios = require("axios");
const db = require("../models");
module.exports = {
    findAll: function(req, res){
        const {quer: params} = req;
        axios.get("",{params}).then(results =>)
        // insert queryURL and what you want the function to bring back
    }
}