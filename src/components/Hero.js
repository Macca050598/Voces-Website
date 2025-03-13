import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-hero overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-200 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex justify-center mb-4">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">
                Backed by Y Combinator
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="inline-block">For Voice AI Agents</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Launch in minutes not weeks by ensuring your agents deliver a seamless experience in every conversational scenario
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                Book a Demo
              </button>
              <button className="border border-gray-300 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors font-medium">
                Try it yourself
              </button>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] lg:h-[500px] mt-8"
        >
          <Image
            src="/hero-image.png"
            alt="Voice AI Platform Interface"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </div>
  )
} 