import Blog17 from '@/app/components/blogs/blog17'
import ChatbotsFaq from '@/app/components/FAQsforBlog/chatbotsFaq'
import React from 'react'
export const metadata = {
  title: 'Everyday AI Companion: How AI Chatbots are Transforming Daily Life',
  description: 'Discover how AI chatbots are becoming essential everyday companions. Learn about their applications in personal assistance, mental health support, and enhancing daily productivity.',
  keywords: ['everyday ai companion', 'ai chatbots for daily life', 'personal ai assistants', 'ai in mental health support', 'productivity with ai chatbots', 'ai chatbot applications', 'benefits of ai companions', 'future of ai in daily life', 'ai chatbot technology', 'enhancing lifestyle with ai'],
}
const page = () => {
  return (
    <div>
        <Blog17 />
        <ChatbotsFaq />
    </div>
  )
}

export default page