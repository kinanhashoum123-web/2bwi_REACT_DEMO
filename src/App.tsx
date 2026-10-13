import './App.css'
import Components from './Components'

function App() {
  const name = 'Kinan Hashoum'

  return (
    <main className="profile-page">
      <Components.SiteHeader name={name} />
      <Components.HeroSection name={name} />
      <Components.ProfileDetails name={name} />
      <Components.SiteFooter name={name} />
    </main>
  )
}

export default App
