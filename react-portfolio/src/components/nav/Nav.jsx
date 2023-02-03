import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage  } from "react-icons/ai";
import { FiBookOpen  } from "react-icons/fi";
import { RiCustomerServiceLine  } from "react-icons/ri";

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><FiBookOpen /></a>
      <a href="#services"><RiCustomerServiceLine /></a>
      <a href="#contact"><AiOutlineMessage /></a>

    </nav>
  )
}

export default Nav