import { ArrowUp } from '@phosphor-icons/react'
import './BackToTop.css'
import { useEffect, useState } from 'react'

export function BackToTop() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button className={showButton ? 'visible' : 'hidden'} onClick={scrollToTop}>
      <ArrowUp />
    </button>
  )
}
