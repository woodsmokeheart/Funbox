import React from 'react'
import css from './MainPage.module.scss'
import BlockFilms from '../../components/BlockFilms/BlockFilms'
import Posts from '../../components/Posts/Posts'
import Comments from '../../components/Comments/Comments'
import img1 from '../../assets/img/matrix.png'
import img2 from '../../assets/img/max.png'
import img3 from '../../assets/img/inter.png'
import img4 from '../../assets/img/cloud.png'
import img5 from '../../assets/img/dead.png'
import img6 from '../../assets/img/silicon.png'
import img7 from '../../assets/img/breakingbad.png'
import img8 from '../../assets/img/xfiles.png'


function MainPage () {
  const films = [
    {
      title: 'Новые фильмы',
      films: [
        {
          link: '/',
          picture: img1
        },
        {
          link: '/',
          picture: img2
        },
        {
          link: '/inter',
          picture: img3
        },
        {
          link: '/',
          picture: img4
        }
      ]
    },
    {
      title: 'Новые сериалы',
      films: [
        {
          link: '/',
          picture: img5
        },
        {
          link: '/',
          picture: img6
        },
        {
          link: '/',
          picture: img7
        },
        {
          link: '/',
          picture: img8
        }
      ]
    }
  ]
  const postsContent = {
    titleInter: 'Как снимали Интерстеллар',
    filmDescriptionInter:'45 лет исполнилось Кристоферу Нолану — одному из самых успешных режиссеров нашего времени, чьи работы\n' +
      '          одинаково любимы как взыскательными критиками, так и простыми зрителями. Фильмом изначально занималась\n' +
      '          студия Paramount. Когда Кристофер Нолан занял место режиссера, студия Warner Bros., которая выпускала его\n' +
      '          последние фильмы, добилась участия в проекте.',
    titleActor:'Актер Том Хенкс поделился впечатлением о фестивале',
    actorDescription: '16 февраля в Лондоне состоялась 67-я церемония вручения наград Британской киноакадемии. Леонардо\n' +
      '          ДиКаприо, Брэд Питт, Анджелина Джоли, Кейт Бланшетт, Хелен Миррен, Эми Адамс, Кристиан Бэйл, Альфонсо\n' +
      '          Куарон и другие гости и победители премии — в нашем репортаже.'
  }
  const userComments = {
    titleInter: 'Отзывы об Интерстеллар',
    comment: [
      {
        user: 'Сергей',
        text: 'Отличный фильм, три часа пролетели незаметно.'
      },
      {
        user: 'Дмитрий',
        text: 'После фильма Начало, я с нетерпением ждал еще работ от ' +
          'Кристофера Нолана. Интерстеллар меня впечатлил.'
      },
      {
        user: 'Владислав',
        text: 'Отличный фильм, три часа пролетели незаметно.'
      },
      {
        user: 'Петр',
        text: 'После фильма Начало, я с нетерпением ждал еще работ от ' +
          'Кристофера Нолана. Интерстеллар меня впечатлил.'
      },
      {
        user: 'Владимир',
        text: 'Отличный фильм, три часа пролетели незаметно.'
      }
    ]
  }


  return (
    <div className={css.main}>
      <div className={css.siteContent}>
        <div className={css.content}>
          {
            films.map((item, key) => {
              return <BlockFilms key={key} films={item}/>
            })
          }
          <Posts postsContent={postsContent}/>
          <Comments userComments={userComments}/>
        </div>
      </div>
    </div>
  )
}

export default MainPage
