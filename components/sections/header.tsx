import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 max-w-7xl">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
            <span className="text-white text-sm font-bold">★</span>
          </div>
          <span className="font-bold text-xl text-gray-900 tracking-tight">Claude</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link 
            href="#features" 
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 relative group"
          >
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="#pricing" 
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 relative group"
          >
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="#faq" 
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 relative group"
          >
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="hidden md:inline-flex text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            Sign in
          </Button>
          <Button 
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-300"
          >
            Get started
          </Button>
        </div>
      </div>
    </header>
  )
} 