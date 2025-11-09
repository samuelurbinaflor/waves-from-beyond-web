import React, { useState, useEffect } from 'react'
import FirstSprint from './Sprints/FirstSprint.jsx'
import SecondSprint from './Sprints/SecondSprint.jsx'

export default function SprintCarousel() {
  const slides = [
    <FirstSprint />,
    <SecondSprint />
  ]

  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % slides.length)
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)

  useEffect(() => {
    const interval = setInterval(next, 4000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="sprint-carousel">
      {slides[current]}

      <div className="controls">
        <button onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
        <button onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
      </div>
    </div>
  )
}
