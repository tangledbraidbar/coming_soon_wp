import React from "react"
import logo from "C:/Users/Mehul/Desktop/8Ball_Designs/shayla/coming_soon/src/images/instagram_logo.jpg"

export default function Home() {
  return <div id = "everything">
    <div id = "tangled_header">
    <h1>Tangled</h1>
    </div>
    <div id = "braidbar_header">
    <h1>Braid bar</h1>
    </div>

    <div id = "comingsoon_header">
    <h1>···Coming Soon···</h1>
    </div>

    <div id = "email">
    <a href="mailto:booking@tangledbraidbar.com">booking@tangledbraidbar.com</a>
    </div>

    <div id ="social_media">
        <a href="https://instagram.com/tangledbraidbar?igshid=aagwtx4eecr3"><img src = {logo} alt = "Logo"/></a>
    </div>

    </div>

  }
