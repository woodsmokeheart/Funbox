import * as React from 'react'
import css from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = ({ data }) => {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <div className={css.logo_text}>
          <h1><a href="/">{data.title}</a></h1>
          <h2>{data.subTitle}</h2>
        </div>
      </div>

      <div className={css.menubar}>
        {
          data.links.map((item, key) => (
            <NavLink
              exact
              to={item.link}
              className={css.link}
              activeClassName={css.selected}
            >
              {item.title}
            </NavLink>
          ))
        }
      </div>
    </div>

  )
}
export default Header
