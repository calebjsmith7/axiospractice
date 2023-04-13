import React from "react";

import axios from "axios";

export default function getDataService() {
   let answer;
    try {
       return axios.get('https://thecocktaildb.com/api/json/v1/1/random.php')
            .then((response) => response.data.drinks[0])
          
    } catch (error) {
        console.log(error);
    }



  
}