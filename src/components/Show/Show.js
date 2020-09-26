import * as React from 'react'
import css from './Show.module.scss'

const Show = ({ movie }) => {
  return (
    <div className={css.wrap}>
      <div className={css.pictureIntestellar1}><img src={movie.imgInter} alt=""/></div>
      <div className={css.infoFilmPage}>
        {
          movie.label.map((item, key) => (
            <div key={key}>
              <span className={css.label}>{item.text}</span>
              <span className={css.value}>{item.raiting}</span>
            </div>))
        }
      </div>
      <hr/>
      <div className={css.Descript}>
      <h2>{movie.titleDescription}</h2>
      <div className={css.descriptionFilm}>
        {movie.descriptionInter}
      </div>
      </div>

    </div>

  )
}

export default Show
