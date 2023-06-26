import { useState, useEffect } from 'react'
import { Star } from '@phosphor-icons/react'
import './Repositorio.css'

export function Repositorio(){

const token = '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'

const headers = {
  'Authorization': `Token ${token}`
}

const [repositorio, setRepositorio] = useState([])

useEffect(()=>{
  async function carregaRepositorios(){
    const res = await fetch(
      "https://api.github.com/users/rehfeld13/repos", {headers})

    const repositorios = await res.json()

    setRepositorio(repositorios)
    }

  carregaRepositorios()

}, [])

  return(
    <ul>
      {repositorio.map((repositorio)=>{
        return(
          <li key={repositorio.id}>

            <span className='name'>{repositorio.name}</span>
            <span className='star'>
              {repositorio.stargazers_count}
              <Star />
            </span>

            <button>
              <a target='_blank' href={repositorio.html_url}>Acesse aqui</a>
            </button>
          </li>
        )
      })}
    </ul>
  )

}