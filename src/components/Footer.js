import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo-white.svg" alt="Voces Logo" width={120} height={40} />
            </Link>
            <p className="text-gray-400 max-w-xs">
              Launch voice agents 10X faster with simulation monitoring
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Voces</h3>
              <ul className="space-y-2">
                <li><Link href="/how-we-work" className="text-gray-400 hover:text-white">How we work</Link></li>
                <li><Link href="/guides" className="text-gray-400 hover:text-white">Guides</Link></li>
                <li><Link href="/use-cases" className="text-gray-400 hover:text-white">Use Cases</Link></li>
                <li><Link href="/testimonials" className="text-gray-400 hover:text-white">Testimonials</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Partners</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Retell AI</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:founders@voces.ai" className="text-gray-400 hover:text-white">founders@voces.ai</a></li>
                <li><p className="text-gray-400">710 Lakeway Drive, Suite 200<br />Sunnyvale, CA 94085</p></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              Made with ♥️ Voces © {new Date().getFullYear()}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 