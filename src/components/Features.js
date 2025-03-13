import { motion } from 'framer-motion'

import { 
  ChartBarIcon, 
  CogIcon, 
  LightningBoltIcon,
  ChatBubbleBottomCenterTextIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: ChartBarIcon,
    title: 'Advanced Analytics',
    description: 'Get detailed insights into your voice AI performance with comprehensive analytics and reporting.'
  },
  {
    icon: CogIcon,
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing voice AI infrastructure in minutes.'
  },
  {
    icon: LightningBoltIcon,
    title: 'Real-time Testing',
    description: 'Test your voice agents in real-time with our advanced simulation platform.'
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
    title: 'Conversation Monitoring',
    description: 'Monitor and analyze conversations to improve your AI agents performance.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
}

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Wasting time calling your own agent?<br />
            <span className="text-indigo-600">Not anymore</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow bg-white"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 