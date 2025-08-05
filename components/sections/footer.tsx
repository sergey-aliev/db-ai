import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Brand and Copyright */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">AI</div>
            <div className="space-y-2 text-sm text-gray-400">
              <p>© 2024 AI Inc.</p>
              <p>All rights reserved.</p>
            </div>
          </div>

          {/* Middle Column - Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-base">Product</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-base">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Responsible Disclosure
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
} 