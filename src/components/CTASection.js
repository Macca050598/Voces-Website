import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-cta">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to ship voice<br />agents fast?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Book a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 