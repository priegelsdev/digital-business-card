import React from 'react'
import fbIcon from './assets/Facebook Icon.png'
import githubIcon from './assets/GitHub Icon.png'
import instaIcon from './assets/Instagram Icon.png'
import twitterIcon from './assets/Twitter Icon.png'

export default function Footer() {
  return (
    <footer>
      <a href="https://www.twitter.com"><img src={twitterIcon}/></a>
      <a href="https://www.facebook.com"><img src={fbIcon}/></a>
      <a href="https://www.instagram.com"><img src={instaIcon}/></a>
      <a href="https://www.github.com"><img src={githubIcon}/></a>
    </footer>
  )
}