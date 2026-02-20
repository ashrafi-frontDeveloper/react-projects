import React, { useState } from 'react'
import NoCity from './components/NoCity'
import './App.css'

export default function App() {

  const [city, setCity] = useState("")
  const [cityTempData, setCityTempData] = useState({})
  const [noCity, setNoCity] = useState(false)


  const cities = [
    {id: 1, name: "تهران", temp: 25, decs: "تقریبا ابری - احتمال بارش"},
    {id: 2, name: "شیراز", temp: 12, decs: "ابری - باران شدید"},
    {id: 3, name: "اصفهان", temp: 16, decs: " ابری و باد شدید - بارش"},
    {id: 4, name: "تبریز", temp: 5, decs: "برف و باران شدید"},
    {id: 5, name: "یزد", temp: 35, decs: "آفتابی"},
  ]

  const showTempHandler = () => {
    const cityTemp = cities.find(item => item.name == city)
    if (cityTemp) {
      setCityTempData(cityTemp)
      setNoCity(false)
      setCity("")
    } else {
      setCityTempData(null)
      setNoCity(true)
    }
  }

  return (
    <>
      <article id="weather-card">
        <header className="" id="weather-card.header">
          <div id="city-name"> {cityTempData?.name ? cityTempData.name : cities[0].name} </div>

          <div className="temp-parent">
            <span id="symbol"> C </span>
            <span id="temperature"> {cityTempData?.temp ? cityTempData.temp : cities[0].temp} </span>
          </div>

          <div id="desc">{cityTempData?.decs ? cityTempData.decs : cities[0].decs}</div>

          <div id="search-field">
            <input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              type="text"
              placeholder="نام شهر خود را جستجو کنید ..."
              id="search-input"
              className="w-full h-10 bg-black"
            />
            <button id="search-btn" onClick={showTempHandler}>جستجو</button>
          </div>
        </header>

        <main>
          <div id="in-hours">
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="images/sunny.png" />
              <p className="hour-temp">27C</p>
            </article>

            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="images/rainy.png" />
              <p className="hour-temp">27C</p>
            </article>

            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="images/sunny.png" />
              <p className="hour-temp">27C</p>
            </article>

            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="images/sunny.png" />
              <p className="hour-temp">27C</p>
            </article>
          </div>
        </main>

        <footer id="daily-section">
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>

          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>

          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>

          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
        </footer>
      </article>
      {noCity && <NoCity onClose={() => setNoCity(false)} />}
    </>
  )
}
