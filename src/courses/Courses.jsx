import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Course from '../Components/Course'
import list from '../../public/list.json'
function Courses() {
    console.log(list,"llllllllllllllllllllllll")
  return (
    <>
    <Navbar/>
<div>
    <Course/>
</div>
    <Footer/>
    </>
  )
}

export default Courses