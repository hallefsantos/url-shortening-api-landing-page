import { useState, useEffect } from 'react'

import BoostLinks from '../components/BoostLinks'
import Form from '../components/Form'
import Footer from '../components/Footer'
import GeneratedLinks from '../components/GeneratedLinks'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AdvancedStatistics from '../components/AdvancedStatistics'

export default function Home() {
  const [link, setLink] = useState('')
  const [links, setLinks] = useState([])

  useEffect(() => {
    const storageLinks = JSON.parse(localStorage.getItem('links'))
    if (storageLinks && storageLinks.length > 0) {
      setLinks(storageLinks)
    }
  }, [])

  useEffect(() => {
    addToLocal()
  }, [links])

  const handleSubmit = async (e) => {
    e.preventDefault()
    addLinkToArray(await generateLink())
  }
  
  const addLinkToArray = (link) => {
    setLinks([...links, link])
    setLink('')
  }

  const addToLocal = () => {
    localStorage.setItem('links', JSON.stringify(links));
  }

  const generateLink = async (e) => {
    const data = await fetch("https://api.rebrandly.com/v1/links", {
      method: "POST",
      body: JSON.stringify({destination: link}),
      headers: {
        "Content-Type": "application/json",
        "apikey": process.env.REBRANDLY_API_KEY,
      }
    })
  
    const res = await data.json()

    return {
      id: res.id,
      destination: res.destination,
      shortUrl: res.shortUrl,
    }
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Form link={link} setLink={setLink} handleSubmit={handleSubmit} />
      {links.length > 0 && (
        <GeneratedLinks links={links} />
      )}

      <AdvancedStatistics />
      <BoostLinks />
      <Footer />
    </>

  )
}
