import React, { useEffect, useRef, useState } from 'react'
import '../switch.css'

function Switch() {
  const ref = useRef(null)
  const [checked, setChecked] = useState(false)
  const handleChange = () => {
    console.log(ref.current.checked)
    setChecked(ref.current.checked)
    if (ref.current.checked) {
      document.body.classList.add('is-dark-mode')
      document.body.classList.remove('is-light-mode')
  
    } else {
      document.body.classList.remove('is-dark-mode')
      document.body.classList.add('is-light-mode')
    }
  }

  function changeMedia(mq) {
    if (mq.matches) {
      setChecked(!checked)
      ref.current.setAttribute('checked', true)
    }
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setChecked(!checked)
  }, [])
  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input ref={ref} onClick={handleChange} checked={checked} className="checkbox" type="checkbox" id="checkbox" />
      <label className="switch" htmlFor="checkbox" ></label>
    </div>
  )
}

export default Switch