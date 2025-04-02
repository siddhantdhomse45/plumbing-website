import React from 'react'
import Hero from '../../components/hero/Hero'
import Expertise from '../../components/expertise/Expertise'
import Better from '../../components/better/Better'
import Testimonial from '../../components/testimonial/Testimonial'
import Projects from '../../components/projects/Projects'
import Glance from '../../components/glance/Glance'
import Help from '../../components/help/Help'
import Blog from '../../components/blog/Blog'
import OurService from '../../components/glance/OurService'
import Guarantee from '../../components/gaurantee/Gaurantee'



function HomePage() {
  return (
    <div>
     
      <Hero />
      <Guarantee />
      <Expertise />
      <Better />
      <Testimonial />
      <Projects />
      <OurService />
      <Glance />
      <Help />
      <Blog />
    </div>
  )
}

export default HomePage