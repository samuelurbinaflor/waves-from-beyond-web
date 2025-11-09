import React from 'react'

export default function Menu({ setCurrentPage }) {
  return (
    <div id="menu">
      <button onClick={() => setCurrentPage('devlogs')}>DevLogs</button>
      <button onClick={() => setCurrentPage('wfb')}>WFB</button>
    </div>
  )
}
