import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HowItWorks() {
  const scenarios = [
    {
      title: "Your new prompt broke appointment cancellation?",
      category: "Workflow",
      action: "Simulate Scenarios",
      image: "/scenario1.png"
    },
    {
      title: "An impatient, interruptive user causing issues?",
      category: "Personas",
      action: "Replay real conversations",
      image: "/scenario2.png"
    },
    {
      title: "An old conversation that always causes issues?",
      category: "Evaluations",
      action: "Analyze Patterns",
      image: "/scenario3.png"
    },
    {
      title: "Skipping compliance checks suddenly?",
      category: "Observability",
      action: "Monitor Compliance",
      image: "/scenario4.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Test against AI generated and custom datasets. Use workflows, personas and real audio to create datasets and evaluate them on your own metrics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                    {scenario.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {scenario.title}
                </h3>
                <div className="mt-4">
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                    {scenario.action} →
                  </button>
                </div>
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src={scenario.image}
                  alt={scenario.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 