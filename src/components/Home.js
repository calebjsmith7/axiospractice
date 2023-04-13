import React, { useEffect, useReducer, useState } from "react";
import Recipe from "./Recipe";
import getDataService from "../services/getDataService";


export default function Home({children}) {
    const [user, setUser] = useState('Caleb');
   

    return (
        <>
            <h1>Coctail Recipes</h1>
            <h3>Hello {user}</h3>
           {children}
           
        </>
    )
}