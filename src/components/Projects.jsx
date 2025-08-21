import React from 'react'

export default function Projects() {
  return (
    <section id="projects" className="box-project">
      <h2>Projects</h2>
      <div className="project-container">
        <div className="box-kiri">
          <img src="/ocis.jpg" alt="Project 1" />
          <h3>OSHIVEMA</h3>
          <p>OSIS HIGH VOCATIONAL EIGHT MALANG</p>
        </div>
        <div className="box-tengah">
          <img src="/voel.jpg" alt="Project 2" />
          <h3>VOELTURA</h3>
          <p>DIES NATALIS SMKN 8 MALANG</p>
        </div>
        <div className="box-kanan">
          <img src="/jisf.jpg" alt="Project 3" />
          <h3>JISF</h3>
          <p>Jakarta International Science Fair</p>
        </div>
        <div className="box-tengah">
          <img src="/jurassic.jpg" alt="Project 2" />
          <h3>JURASSIC</h3>
          <p>2nd Winner Poster Digital</p>
        </div>
      </div>
    </section>
  )
}
