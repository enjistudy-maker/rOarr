import React from 'react'

export default function Banner() {
  return (
    <section id="home" className="banner">
      <img src="/enjing.jpg" alt="profile" />
      <h1>HELLOOWW!! ꒰ᐢ. .ᐢ꒱ WELCOME TO ENJIY'S PAGE</h1>
      <p>Helloo guys, let me introduce myself, my full name is "Enggita Septiana Nadeak", you can call me Enji. I'm fifteen years old. I have skill in designing, my hobby is listening to music, and my favorite artist is Sunwoo from TheBoyz."</p>
      <div className="cta">
        <a href="https://instagram.com/USERNAME" target="_blank" rel="noopener noreferrer">
          <button>Instagram</button>
        </a>
        <a href="https://open.spotify.com/USER_SPOTIFY" target="_blank" rel="noopener noreferrer">
          <button>Spotify</button>
        </a>
      </div>
    </section>
  )
}
