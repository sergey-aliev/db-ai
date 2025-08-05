import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function Description() {
  return (
    <section id="features" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline your workflow and boost productivity.
          </p>
        </div>

        {/* Features Grid - 2x2 Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Feature 1 - Lightning Fast */}
          <Card className="overflow-hidden border-0 shadow-sm bg-gradient-to-b from-blue-50 to-white hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-3 text-gray-900">
                    Lightning Fast
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Process tasks in milliseconds with our optimized engine. Experience speed that sets new standards.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature 2 - Enterprise Security */}
          <Card className="overflow-hidden border-0 shadow-sm bg-gradient-to-b from-purple-50 to-white hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-3 text-gray-900">
                    Enterprise Security
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bank-grade encryption and security protocols that keep your data protected at all times.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature 3 - Advanced Analytics */}
          <Card className="overflow-hidden border-0 shadow-sm bg-gradient-to-b from-orange-50 to-white hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-3 text-gray-900">
                    Advanced Analytics
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Gain deep insights with comprehensive reporting tools that help you make data-driven decisions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature 4 - Smart Automation */}
          <Card className="overflow-hidden border-0 shadow-sm bg-gradient-to-b from-green-50 to-white hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-3 text-gray-900">
                    Smart Automation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI-powered workflows that learn and adapt to your needs, making work effortless.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Built for Modern Teams
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how Claude transforms the way teams work together with AI-powered collaboration.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Team Feature 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-xl mb-3 text-gray-900">Team Collaboration</h4>
              <p className="text-gray-600">Work together seamlessly with shared conversations and collaborative features.</p>
            </div>

            {/* Team Feature 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-semibold text-xl mb-3 text-gray-900">Knowledge Integration</h4>
              <p className="text-gray-600">Connect your documents and databases for context-aware responses.</p>
            </div>

            {/* Team Feature 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-xl mb-3 text-gray-900">Content Creation</h4>
              <p className="text-gray-600">Draft and iterate on documents, code, and graphics with AI assistance.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to experience the power?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of users already transforming their workflow with Claude
            </p>
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Today
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 