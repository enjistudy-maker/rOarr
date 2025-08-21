import React from 'react'

export default function Footer() {
  const sayHello = () => {
    alert('tengkies sudah baca sampee akhirr loafyu')
  }

  return (
    <footer className="footer">
      <p>© 2025 Enji. All rights reserved.</p>
      <button onClick={sayHello}>Say Hello</button>
    </footer>
  )
}
