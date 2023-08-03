import{ useState } from 'react'
import AddCategory from './components/AddCategory'

export default function GifExpertApp() {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])
    const [error, setError] = useState(false)
    const [value, setValue] = useState('')

    const onAddCategory = (nuevaCategoria) => {
        if(categories.includes(nuevaCategoria)) {
            setError(true)
            return
        }
        setError(false)
        setValue('')
        setCategories([...categories, nuevaCategoria])
        
    }
  return (
    <div>

        <h1>GifExpertApp</h1>

        {error && <p>La categoria ya existe</p>}

        <AddCategory 
        onNewCategory={(value) =>{
            onAddCategory(value)
        }}
        categories={categories}
        value={value}
        setValue={setValue}
        />

        <ol>
            {
                categories.map(category => {
                    return <li key={category}>{category}</li>
                })
            }
        </ol>
    </div>
  )
}
