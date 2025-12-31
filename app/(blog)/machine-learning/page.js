import Blog15 from '@/app/components/blogs/blog15'
import MachineLearningFaq from '@/app/components/FAQsforBlog/machineLearning'
import React from 'react'
export const metadata = {
  title: 'Machine Learning Unveiled: A Deep Dive into Algorithms, Techniques, and Applications',
  description: 'Uncover the intricacies of Machine Learning. Explore various algorithms, techniques, and real-world applications that are shaping the future of AI and data science.',
  keywords: ['machine learning algorithms explained', 'types of machine learning techniques', 'supervised vs unsupervised learning', 'applications of machine learning in ai', 'machine learning model training', 'feature engineering in machine learning', 'evaluation metrics for machine learning', 'machine learning in healthcare', 'machine learning in finance', 'future trends in machine learning'],
}
const page = () => {
  return (
    <div>
        <Blog15 />
        <MachineLearningFaq />
    </div>
  )
}

export default page