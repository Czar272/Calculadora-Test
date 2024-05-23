import { useState, useEffect } from 'react'
import './Button.css'

const Button = ({ text, onClick, style }) => {
  const [clicked, setclicked] = useState(false)

  let shortText = text?.substring(0 , 10) ?? ''

  if (shortText.length < text?.length ?? 0) {
    shortText += '...'
  }

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setclicked(false)
      }, 500)
    }
  }, [clicked])

  const handleClick = async () => {
    if (clicked) {
      return
    }

    setclicked(true)
    await onClick()
    setclicked(false)
  }

  return (
    <button style={style} className="boton" onClick={handleClick} title={text}>
      {shortText}
    </button>
  )
}

export default Button