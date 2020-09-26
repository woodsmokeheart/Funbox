import * as React from 'react'
import css from './Posts.module.scss'

const Posts = ({postsContent}) => {
  return (
    <div className={css.posts}>

      <hr/>
      <h2><a href="/">{postsContent.titleInter}</a></h2>
      <div className={css.postsContent}>

        <p>
          {postsContent.filmDescriptionInter}
        </p>

      </div>

      <p><a href="/">читать</a></p>

      <hr/>
      <h2><a href="/">{postsContent.titleActor}</a></h2>
      <div className={css.postsContent}>
        <p>{postsContent.actorDescription}</p>
      </div>
      <p><a href="/">читать</a></p>

    </div>
  )
}
export default Posts
