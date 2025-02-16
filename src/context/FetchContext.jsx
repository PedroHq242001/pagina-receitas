import { createContext, useEffect, useState, useReducer } from "react";
import {images} from '../data/images.jsx';

const url = "https://api-receitas-pi.vercel.app/receitas/";

export const FetchContext = createContext();

export const FetchContextProvider = ({children}) => {
   const [data, setData] = useState(null);
   const [ingredientes, setIngredientes] = useState(null);
   const [id, setId] = useState(1);
   const [image, setImage] = useState(null);

   const getData = async (url, id) => {
      fetch(url.concat(String(id))) // junta a url com o id
      .then((response) => response.json())
      .then((data) => setData(data));

      await fetch(url.concat("ingredientes/", String(id))) // junta a url com o id
      .then((response) => response.json())
      .then((data) => setIngredientes(data));

      const alterarImagem = () => {
         setImage(images[id - 1]);
      }
      await alterarImagem();
   }

   useEffect(() => {
      // vai fazer o id retornar ao primeiro quando estiver na ultima receita
      if (id > 9) {
         setId(1);
      }
      getData(url, id);
      window.scrollTo({ top: 0, behavior: "smooth" });
   }, [id])

   return <FetchContext.Provider value={{data, id, setId, ingredientes, image}}>
      {children}
   </FetchContext.Provider> 

}