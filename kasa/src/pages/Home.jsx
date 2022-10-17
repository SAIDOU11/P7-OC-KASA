import { useContext } from 'react'
import { AppContext } from '../context/context'

export function Home() {
  const context = useContext(AppContext)
  console.log(context)

  return (
    <div>
      <h1 className="title">Page Home 🏠</h1>
      <p>Bonjour</p>
    </div>
  )
}
