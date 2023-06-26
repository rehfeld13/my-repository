import { GithubLogo } from '@phosphor-icons/react'
import './Header.css'

export function Header(){
  return(
    <header>
      <div>
        <span>Repositórios @rehfeld13.</span>
        <GithubLogo className='github' />
      </div>
    </header>
  )
}