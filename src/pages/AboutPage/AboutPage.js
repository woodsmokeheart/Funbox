import React from 'react'
import css from './AboutPage.module.scss'
import Show from '../../components/Show/Show'
import img1 from '../../assets/img/interstellar.jpg'

const movie = {
  imgInter: img1,
  titleDescription: 'Описание Интерстеллар',
  descriptionInter: 'Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису,\n' +
    '            коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет\n' +
    '            области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения\n' +
    '            для космических путешествий человека и найти планету с подходящими для человечества условиями.',
  label:
    [
      {
        text: 'рейтинг:',
        raiting: '8.1 / 10'

      },
      {
        text: 'год:',
        raiting: '2014'

      },
      {
        text: 'режиссер:',
        raiting: 'Кристофер Нолан'

      }
    ]
}

function AboutPage () {
  return (
    <div className={css.wrap}>
      <Show movie={movie}/>
    </div>
  )
}

export default AboutPage
