import PropTypes from 'prop-types'

export default function AddCategory({onNewCategory, categories}) {

    const handlerSubmit = (e) => {
        e.preventDefault()
        const newCategory = e.target[0].value.trim()
        if(newCategory.length > 2 && !categories.includes(newCategory) ){
            onNewCategory(newCategory)
            e.target[0].value = ''
        }

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
    onNewCategory: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}