import PropTypes from 'prop-types'

export default function AddCategory({onAddCategory}) {

    const handlerSubmit = (e) => {
        e.preventDefault()
        onAddCategory(e.target[0].value)
    }

  return (
    <>  
        <form action="" onSubmit={(e)=>{
            handlerSubmit(e)
        }}>
            <input 
            type="text" 
            placeholder='Busca tus gifs'
            />
            <button>Agrega Categoria</button>
        </form>

    </>
  )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}