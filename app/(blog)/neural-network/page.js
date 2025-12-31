import Blog21 from '@/app/components/blogs/blog21'
import NeuralNetwork from '@/app/components/FAQsforBlog/neuralNetwork'
import React from 'react'
export const metadata = {
  title: 'Neural Networks Explained: A Comprehensive Guide to Understanding AI Models',
  description: 'Dive into the world of Neural Networks. Learn how they work, their architectures, training methods, and applications in AI and machine learning.',
  keywords: ['neural networks explained with examples', 'types of neural network architectures', 'how neural networks learn and train', 'applications of neural networks in ai', 'deep learning and neural networks', 'neural network activation functions', 'convolutional neural networks (cnns)', 'recurrent neural networks (rnns)', 'neural network optimization techniques', 'future trends in neural networks'],
}
const page = () => {
  return (
    <div>
      <Blog21 />
      <NeuralNetwork />
    </div>
  )
}

export default page
