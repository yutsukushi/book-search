const axios = require("axios");
const db = require("../models");
module.exports = {
    findAll: function(req, res){
        const {quer: params} = req;
        axios.get("https://www.googleapis.com/books/v1/volumes", {params: {q: res}
    // }).then(results => )
        // insert queryURL and what you want the function to bring back
    })
}
}