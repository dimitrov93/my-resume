import React, { useEffect, useState } from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import * as headerService from '../../services/headerService'


const Header = () => {
  const [name, setName] = useState('Tsvetomir')
  const [data, setData] = useState([])

  useEffect(() => {
    try {
      headerService.getHeader()
        .then((result) => {
          console.log(result);
          setData(result)
        })
    } catch (error) {
      console.log(error);
    }
  }, [])
  

  const onSubmit = (e) => {
    e.preventDefault();

    const { name } = Object.fromEntries(new FormData(e.target));

    setName(name)

  }

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>      {data.map(x => x.name)}</h1>

        <div className='changeName'>
          <form onSubmit={onSubmit}>
          <input type="text" name='name' placeholder='New name' />
          <button type='submit' className='btn btn-primary'>Change name</button>
          </form>
        </div>


        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll down</a>

      </div>
    </header>
  )
}

export default Header