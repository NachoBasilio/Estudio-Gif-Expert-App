import{ useState } from 'react'

export default function GifExpertApp() {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    const onAddCategory = (nuevaCategoria) => {
        setCategories([...categories, nuevaCategoria])
    }
  return (
    <div>
        <h1>GifExpertApp</h1>
        <button onClick={()=>{
            let nuevaCategoria = prompt('Ingrese una nueva categoria')
            onAddCategory(nuevaCategoria)
        }}>Agregar</button>
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
