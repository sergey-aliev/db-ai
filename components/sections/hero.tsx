"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export function Hero() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pendingVerification, setPendingVerification] = useState(false)
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear any previous errors
    setError('')
    
    // Check if Clerk is loaded
    if (!isLoaded) {
      console.log('Clerk is not loaded yet')
      return
    }

    // Validate inputs
    if (!email.trim()) {
      setError('Email is required')
      return
    }
    
    if (!password.trim()) {
      setError('Password is required')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    console.log('Attempting to create account with:', { email, passwordLength: password.length })
    
    setIsLoading(true)
    try {
      const result = await signUp.create({
        emailAddress: email,
        password,
      })

      console.log('Sign up creation result:', result)

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
      setPendingVerification(true)
      console.log('Email verification prepared successfully')
    } catch (err: any) {
      console.error('Sign up error:', err)
      
      if (err.errors && err.errors.length > 0) {
        setError(err.errors[0].longMessage || err.errors[0].message)
      } else {
        setError('An error occurred during sign up. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const onPressVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isLoaded) return
    if (!code.trim()) {
      setError('Verification code is required')
      return
    }

    setError('')
    setIsLoading(true)
    
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })

      console.log('Verification result:', completeSignUp)

      if (completeSignUp.status !== 'complete') {
        console.log('Sign up not complete:', JSON.stringify(completeSignUp, null, 2))
        setError('Verification failed. Please check your code and try again.')
        return
      }

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId })
        router.push('/dashboard')
      }
    } catch (err: any) {
      console.error('Verification error:', err)
      if (err.errors && err.errors.length > 0) {
        setError(err.errors[0].longMessage || err.errors[0].message)
      } else {
        setError('Verification failed. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = () => {
    if (!isLoaded || !signUp) {
      console.log('Clerk not loaded or signUp not available')
      return
    }
    
    try {
      signUp.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: '/sso-callback',
        redirectUrlComplete: '/dashboard'
      })
    } catch (err) {
      console.error('Google sign up error:', err)
      setError('Google sign up failed. Please try again.')
    }
  }

  return (
    <section className="min-h-screen flex items-center px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Sign Up */}
        <div className="space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">
              Transform your workflow with{' '}
              <span className="text-purple-600">intelligent automation</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Streamline your processes, boost productivity, and achieve more.
            </p>
          </div>

          {/* Registration Form */}
          <Card className="w-full max-w-md border border-gray-200 shadow-lg">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Create your account</h2>
                <p className="text-sm text-gray-600 mt-2">Welcome! Please fill in the details to get started.</p>
              </div>

              {/* Debug info - remove in production */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mb-4 p-2 bg-gray-100 rounded text-xs">
                  <p>Debug: Clerk loaded: {isLoaded ? 'Yes' : 'No'}</p>
                  <p>Debug: SignUp available: {signUp ? 'Yes' : 'No'}</p>
                </div>
              )}

              {/* Error Display */}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}
              
              {!pendingVerification && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Google Sign In Button */}
                  <button
                    type="button"
                    className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 py-3 px-4 rounded-md font-medium disabled:opacity-50"
                    onClick={handleGoogleSignUp}
                    disabled={!isLoaded || isLoading}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </button>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">or</span>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-700 font-medium text-sm">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Enter your email"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-gray-700 font-medium text-sm">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pr-10"
                        placeholder="Enter your password"
                        required
                        disabled={isLoading}
                        minLength={8}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">Password must be at least 8 characters</p>
                  </div>

                  {/* Continue Button */}
                  <button
                    type="submit"
                    disabled={isLoading || !isLoaded}
                    className="w-full bg-black hover:bg-gray-800 disabled:opacity-50 text-white flex items-center justify-center gap-2 py-3 px-4 rounded-md font-medium"
                  >
                    {isLoading ? 'Creating account...' : 'Continue'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Sign In Link */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Already have an account?{' '}
                      <a href="/sign-in" className="text-purple-600 hover:text-purple-700 font-medium">
                        Sign in
                      </a>
                    </p>
                  </div>
                </form>
              )}

              {pendingVerification && (
                <form onSubmit={onPressVerify} className="space-y-4">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold">Verify your email</h3>
                    <p className="text-sm text-gray-600">Enter the verification code sent to {email}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="code" className="text-gray-700 font-medium text-sm">
                      Verification code
                    </label>
                    <input
                      type="text"
                      id="code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Enter verification code"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-black hover:bg-gray-800 disabled:opacity-50 text-white py-3 px-4 rounded-md font-medium"
                  >
                    {isLoading ? 'Verifying...' : 'Verify Email'}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setPendingVerification(false)
                      setCode('')
                      setError('')
                    }}
                    className="w-full text-sm text-gray-600 hover:text-gray-800"
                  >
                    ← Back to sign up
                  </button>
                </form>
              )}

              {/* Clerk Footer */}
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Secured by{' '}
                  <span className="font-semibold">Clerk</span>
                </p>
                <p className="text-xs text-orange-500 mt-1">Development mode</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Feature Display */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Feature 4</h3>
            
            {/* Feature Carousel */}
            <div className="relative">
              <Carousel className="w-full max-w-md mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="h-64 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg font-medium">Feature Demo</span>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-64 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg font-medium">Feature Demo 2</span>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-64 bg-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg font-medium">Feature Demo 3</span>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}