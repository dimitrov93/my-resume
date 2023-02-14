import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Login from './components/Login/login'
import Logout from './components/Logout/Logout'
import AddPortfolio from './components/portfolio/Add/AddPortfolio'
import { Routes, Route, HashRouter } from "react-router-dom";
import { AuthProvider } from './context/AuthContext'
import EditPortfolio from "./components/portfolio/Edit/EditPortfolio";



const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route basename={'/'} path='/'
          element={
            <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
            </>
          }/>

      <Route path='/login' element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/portfolio/add" element={<AddPortfolio />} />
      <Route path="/portfolio/edit/:id" element={<EditPortfolio />} />
          
      </Routes>
    </AuthProvider>
  )
}

export default App