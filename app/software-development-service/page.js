import React from 'react'
import SoftwareLanding from '../components/softwareDevelopment/softwareLanding'
import SoftwareDevelopment from '../components/softwareDevelopment/softwareDevelopment'
import AgileSoftwareProcess from '../components/softwareDevelopment/agileSoftwareProcess'
import SoftwareSolutions from '../components/softwareDevelopment/softwareSolutions'
export const metadata = {
  title: 'Software Development Life Cycle (SDLC): Full Guide',
  description: 'Explore SDLC phases, models and how DevOps and CI/CD improve software development from planning through testing to deployment and maintenance. ',
  keywords: ['software development life cycle explained','Phases of SDLC with examples','SDLC models comparison waterfall agile ','role of DevOps in SDLC ','SDLC best practices for enterprises ','agile vs traditional SDLC models ','SDLC process for web applications ','importance of SDLC in software engineering ','SDLC stages from planning to maintenance ','modern software development life cycle approach '],
}
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