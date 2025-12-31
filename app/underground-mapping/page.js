import React from 'react'
import Blog31 from '../components/blogs/blog31'
import UndergroundFaq from '../components/FAQsforBlog/undergroundFaq'

export const metadata = {
  title: 'Underground Mapping Guide: GPR, Utilities & Construction Safety',
  description: 'A complete guide to Underground Mapping. Learn how GPR, EM locators, and AI uncover hidden utilities for safer construction, planning, and cost reduction.',
  keywords: [
    'underground mapping for construction safety',
    'ground penetrating radar (GPR) for utilities',
    'detecting subsurface utilities before digging',
    'electromagnetic (EM) locators for metallic pipes',
    'underground mapping challenges and limitations',
    '3D subsurface modeling and GIS integration',
    'underground mapping applications urban planning',
    'future of underground mapping ai digital twins',
    'potholing verification underground utilities',
    'LiDAR and GPS for underground feature positioning'
  ]
}

const page = () => {
  return (
    <div>
      <Blog31 />
      {/* <UndergroundFaq /> */}
    </div>
  )
}

export default page
