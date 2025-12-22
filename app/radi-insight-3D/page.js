import React from 'react'
import ColowatchLanding from '../components/colowatch/colowatchLanding'
import ColowatchStudies from '../components/colowatch/colowatchStudies'

const page = () => {
  return (
    <div className="bg-secondary text-primary min-h-screen">
        <ColowatchLanding/>
        <ColowatchStudies/>
    </div>
  )
}

export default page
