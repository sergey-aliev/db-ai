"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'

const plans = [
  {
    name: 'Free',
    price: 0,
    priceYear: 0,
    subtitle: 'Get started with the basics',
    features: [
      'Chat on web, iOS, and Android',
      'Generate code and visualize data',
      'Write, edit, and create content',
      'Analyze text and images',
      'Ability to search the web',
    ],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: 20,
    priceYear: 120,
    subtitle: 'For power users and professionals',
    features: [
      'Everything in Free',
      'More usage',
      'Unlimited Projects',
      'Priority support',
      'Integrations & API access',
    ],
    cta: 'Start Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: null,
    priceYear: null,
    subtitle: 'Custom solutions for organizations',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Advanced security & compliance',
      'Dedicated account manager',
      'Custom onboarding & training',
    ],
    cta: 'Contact sales',
    highlight: false,
  },
]

export function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-32 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-900 tracking-tight">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Choose the plan that fits your workflow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center mb-12 gap-4">
          <span className={`text-lg font-medium ${!annual ? 'text-gray-900' : 'text-gray-400'}`}>Monthly</span>
          <Switch checked={annual} onCheckedChange={setAnnual} />
          <span className={`text-lg font-medium ${annual ? 'text-gray-900' : 'text-gray-400'}`}>Annually</span>
          {annual && <span className="ml-4 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">Save 17%</span>}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, any) => (
            <Card
              key={plan.name}
              className={`flex flex-col border-0 shadow-xl rounded-3xl px-6 pt-10 pb-8 transition-all duration-300 ${plan.highlight ? 'ring-2 ring-gray-900 scale-105 z-10' : 'bg-gray-50'}`}
            >
              <CardHeader className="border-0 bg-transparent p-0 mb-6">
                <CardTitle className="text-2xl font-semibold mb-2 text-gray-900 text-center">{plan.name}</CardTitle>
                <div className="text-center text-gray-500 text-base mb-4 font-light">{plan.subtitle}</div>
                <div className="text-center mb-2">
                  {plan.price === 0 && <span className="text-4xl font-bold text-gray-900">Free</span>}
                  {plan.price !== 0 && plan.price !== null && (
                    <span className="text-4xl font-bold text-gray-900">
                      ${annual ? plan.priceYear : plan.price}
                      <span className="text-lg font-normal text-gray-500">/{annual ? 'year' : 'mo'}</span>
                    </span>
                  )}
                  {plan.price === null && <span className="text-2xl font-semibold text-gray-700">Custom</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 text-base">
                      <span className="inline-block w-2 h-2 rounded-full bg-gray-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full py-4 rounded-xl text-lg font-medium ${plan.highlight ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'}`}
                  variant={plan.highlight ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">
            * Annual billing saves you 17%. Enterprise plans are custom and billed per agreement.
          </p>
        </div>
      </div>
    </section>
  )
} 