import React from 'react'

export default function Footer() {
  const sayHello = () => {
    alert('tengkies sudah baca sampee akhirr loafyu')
  }

  return (
    <footer className="footer">
      <p> Enggita Septiana Nadeak.</p>
      <button onClick={sayHello}>Say Hello</button>
    </footer>
  )
}
