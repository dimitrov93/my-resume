import React, { useEffect, useState } from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import * as headerService from '../../services/headerService'
import {AiFillEdit} from 'react-icons/ai'

const Header = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  

  useEffect(() => {
    try {
      headerService.getHeader()
        .then((result) => {
          result.map(x => {
            setName(x.name)
            setTitle(x.title)
            setDescription(x.description)
          })
        })
    } catch (error) {
      console.log(error);
    }
  }, [])
  

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, title, description } = Object.fromEntries(new FormData(e.target));

    setName(name)

  }

  return (
    <header>
      <div className="container header__container">
      

        <h5>{title} <button type='button'><AiFillEdit /></button></h5> 
        <h1>{name}</h1>
        <h5 className="text-light">{description}</h5>

        <div className='changeName'>
          <form onSubmit={onSubmit}>
          <input type="text" name='title' placeholder='New title' />
          <input type="text" name='name' placeholder='New name' />
          <input type="text" name='description' placeholder='New description' />
          <button type='submit' className='btn btn-primary'>Change name</button>
          </form>
        </div>


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