import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Voces has transformed how we test and deploy our voice AI agents. We've cut our testing time by 80%.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "VoiceFirst Tech",
      image: "/testimonial1.jpg"
    },
    {
      quote: "The ability to simulate thousands of scenarios has been game-changing for our quality assurance process.",
      author: "Michael Chen",
      role: "Product Manager",
      company: "AI Conversations",
      image: "/testimonial2.jpg"
    },
    {
      quote: "We've seen a 40% reduction in customer complaints since implementing Voces testing platform.",
      author: "Jessica Williams",
      role: "Head of AI",
      company: "TalkBot Solutions",
      image: "/testimonial3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by 50+ Conversational AI companies across the globe
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 