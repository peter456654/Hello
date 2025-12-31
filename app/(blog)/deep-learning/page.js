import Blog16 from "@/app/components/blogs/blog16"
import DeepLearningFaq from "@/app/components/FAQsforBlog/deepLearningFaq"
export const metadata = {
 
  title: 'Deep Learning: A Comprehensive Guide to Understanding Neural Networks',
  description: 'Explore the fundamentals of Deep Learning, including neural network architectures, training techniques, and real-world applications in AI and machine learning.',
  keywords: ['deep learning explained with examples', 'neural network architectures', 'how deep learning works', 'applications of deep learning in ai', 'training deep neural networks', 'convolutional neural networks (cnns)', 'recurrent neural networks (rnns)', 'deep learning frameworks', 'transfer learning in deep learning', 'future trends in deep learning'], 
}

const page = () => {
  return (
    <div>
        <Blog16 />
        <DeepLearningFaq />
    </div>
  )
}

export default page