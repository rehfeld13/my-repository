import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Repositorio } from './components/Repositorio'
import { BackToTop } from './components/BackToTop'

import './App.css'

export function App() {
  return (
    <main>
      <Header />

      <article>
        <Repositorio />
      </article>

      <BackToTop />

      <Footer />
    </main>
  )
}


