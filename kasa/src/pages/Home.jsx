import { useGlobalContext } from '../dataContext/context'

export function Home() {
  const context = useGlobalContext()
  console.log({ context })

  return (
    <div>
      <h1 className="title">Page Home 🏠</h1>
      <p>Bonjour</p>
    </div>
  )
}
