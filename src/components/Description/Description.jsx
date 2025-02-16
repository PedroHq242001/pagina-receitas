import './Description.css';

const Description = ({description}) => {
  return (
    <div>
      <h2 className='description-title'>Modo de preparo:</h2>
      <p className='description'>
        {description}
      </p>
    </div>
  )
}

export default Description