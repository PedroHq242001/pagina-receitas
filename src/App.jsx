import { useContext } from "react";
import { FetchContext } from "./context/FetchContext";

// components
import List from "./components/List/List";
import ListTitle from "./components/ListTitle/ListTitle";
import Description from "./components/Description/Description";

// css
import './App.css';

function App() {
  const {data, id, setId, ingredientes, image} = useContext(FetchContext);

  return (
    <div className="container"> 
      <div className="titulo">
        {data && <ListTitle receita={data.receita}/>}
      </div>
      <div className="imagem">
        <div className="imagem-container">
        {image && <img src={image} alt="indefinido" />}
        </div>
      </div>
      <div className="ingredientes">
        {ingredientes && <List ingredientes={ingredientes}/>}
      </div>
      <div className="preparo">
        {data && <Description description={data.modo_preparo}/>}
      </div>

      <div className="button">
        <button onClick={(e) => {
          setId(id + 1)
          }}>
          Nova receita
        </button>
      </div>
    </div>
  )

}

export default App
