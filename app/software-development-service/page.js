import React from 'react'
import SoftwareLanding from '../components/softwareDevelopment/softwareLanding'
import SoftwareDevelopment from '../components/softwareDevelopment/softwareDevelopment'
import AgileSoftwareProcess from '../components/softwareDevelopment/agileSoftwareProcess'
import SoftwareSolutions from '../components/softwareDevelopment/softwareSolutions'

const page = () => {
  return (
    <div>
        <SoftwareLanding/>
        <SoftwareDevelopment/>
        <AgileSoftwareProcess/>
        <SoftwareSolutions/>
    </div>
  )
}

export default page