import React from 'react'
import Routes from '../pages/Routes'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function App () {
  const data = {
    title: 'КиноМонстр',
    subTitle: 'Кино - наша страсть!',
    links: [
      {
        link: '/main',
        title: 'Главная'
      },
      {
        link: '/',
        title: 'Фильмы'
      },
      {
        link: '/',
        title: 'Сериалы'
      },
      {
        link: '/',
        title: 'Рейтинг фильмов'
      },
      {
        link: '/',
        title: 'Контакты'
      }
    ]
  }
  const contact = {
    landing: 'Pandemonium',
    links: [
      {
        link: '/main',
        title: 'Главная'
      },
      {
        link: '/',
        title: 'Фильмы'
      },
      {
        link: '/',
        title: 'Сериалы'
      },
      {
        link: '/',
        title: 'Рейтинг фильмов'
      },
      {
        link: '/',
        title: 'Контакты'

      }
    ]
  }

  return (
    <BrowserRouter>
      <div className="test">
        <Header data={data}/>
        <Routes/>
        <Footer contact={contact}/>
      </div>
    </BrowserRouter>
  )
}

export default App