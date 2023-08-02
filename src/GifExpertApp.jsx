import{ useState } from 'react'

export default function GifExpertApp() {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])
  return (
    <div>
        <h1>GifExpertApp</h1>
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
