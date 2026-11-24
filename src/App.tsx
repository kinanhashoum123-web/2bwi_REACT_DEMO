import './App.css'
import Components from './Components'

const people = [
  {
    name: 'peter',
    description: 'Das ist Peter',
    value: '0.9416999214426344',
    image: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=600&q=85',
  },
  {
    name: 'susi',
    description: 'super susi',
    value: '0.02559963889852035',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=85',
  },
  {
    name: 'paul',
    description: 'super paul',
    value: '0.45083624948010603',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=85',
  },
]

function App() {
  return (
    <main className="page">
      <h1>Willkommen</h1>
      <section className="card-grid" aria-label="Personen">
        {people.map((person) => (
          <Components key={person.name} {...person} />
        ))}
      </section>
    </main>
  )
}

export default App
