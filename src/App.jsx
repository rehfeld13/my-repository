import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { RepositoryList } from './components/RepositoryList'

import './App.css'
import { BackToTop } from './components/BackToTop'

export function App() {
  return (
    <main>
      <Header />

      <article>
        <RepositoryList />
      </article>

      <BackToTop />

      <Footer />
    </main>
  )
}


