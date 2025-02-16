import './List.css';

const List = ({ingredientes}) => {
  return (
    <div className='list-container'>
      <h2 className='list-title'>Ingredientes:</h2>
      <ul className="list">
        {ingredientes && ingredientes.nomesIngrediente.map((ingrediente) => (
          <li key={ingredientes.id + Math.random()}>{ingrediente}</li>
        ))}
      </ul>
    </div>
    
  )
}

export default List