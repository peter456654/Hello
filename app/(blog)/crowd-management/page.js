import React from 'react'
import Blog33 from '@/app/components/blogs/blog33'
import CrowdManagement from '@/app/components/FAQsforBlog/crowdManagement'
export const metadata = {
  title: 'Crowd Management: How to Keep Large Gatherings Safe and Organized',
  description: 'Learn how to plan, monitor, and manage large crowds effectively. Discover real strategies, safety tips, and tech tools for stress-free event management.',
  keywords: [
    'crowd management strategies',
    'large gathering safety',
    'event crowd control',
    'crowd monitoring technology',
    'emergency crowd management',
    'crowd flow optimization',
    'event safety planning',
    'crowd density management',
    'public safety events',
    'crowd behavior analysis'
  ]
}


const page = () => {
  return (
    <div>
        <Blog33 />
        <CrowdManagement />
    </div>
  )
}

export default page