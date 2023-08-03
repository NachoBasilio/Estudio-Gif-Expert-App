import{ useState } from 'react'
import AddCategory from './components/AddCategory'

export default function GifExpertApp() {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    const onAddCategory = (nuevaCategoria) => {
        setCategories([...categories, nuevaCategoria])
    }
  return (
    <div>
        <h1>GifExpertApp</h1>

        <AddCategory 
        onNewCategory={(value) =>{
            onAddCategory(value)
        }}
        categories={categories}
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
