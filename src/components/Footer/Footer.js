import * as React from 'react'
import css from './Footer.module.scss'

const Footer = ({contact}) => {
  return (
    <div className={css.footer}>
      <div className={css.links}>
        {
          contact.links.map((item, key) => (
            <a href={item.link}>
              {item.title}
            </a>
          ))
        }
      </div>
      <p>{contact.landing}</p>
    </div>

  )
}
export default Footer
