import * as React from 'react'
import css from './Comments.module.scss'

const Comments = ({userComments}) => {

  return (
    <div className={css.wrap}>
      <hr/>
      <h2>{userComments.titleInter}</h2>
      {
        userComments.comment.map((item, key)=>(
          <div className={css.reviews}>
            <div className={css.reviewName}>
              {item.user}
            </div>
            <div className={css.reviewText}>
              {item.text}
            </div>
          </div>
        ))
      }



    </div>
  )
}
export default Comments
