import Blog19 from '@/app/components/blogs/blog19'
import DemystifyingFaq from '@/app/components/FAQsforBlog/demystifyingFaq'
import React from 'react'
export const metadata = {
  title: 'Demystifying Generative AI: Understanding the Technology Behind AI Creativity',
  description: 'Explore the world of Generative AI, its underlying technologies, applications, and how it is transforming industries with creative solutions.',
  keywords: ['generative ai explained', 'how generative ai works', 'applications of generative ai', 'generative adversarial networks (gans)', 'transformers in generative ai', 'ethical considerations in generative ai', 'future of generative ai', 'generative ai in art and music', 'generative ai for content creation', 'advancements in generative ai technology'],
} 
const page = () => {
  return (
    <div>
        <Blog19 />
        <DemystifyingFaq />
    </div>
  )
}

export default page