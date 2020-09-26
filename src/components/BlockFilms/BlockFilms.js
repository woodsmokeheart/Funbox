import * as React from 'react'
import css from './BlockFilms.module.scss'

const BlockFilms = ({ films }) => {
  return (
    <div className={css.wrap}>
      <h1>{films.title}</h1>
      <div className={css.films_block}>
        {
          films.films.map((item, key) => (
            <a href={item.link} key={key}>
              <img src={item.picture} alt=""/>
            </a>
          ))
        }
      </div>
    </div>

  )
}

export default BlockFilms
