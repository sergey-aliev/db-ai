import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqData = [
  {
    question: 'What is Claude?',
    answer: 'Claude is an advanced AI assistant designed to help you write, analyze, code, and create with ease. It leverages state-of-the-art language models to deliver fast, accurate, and safe results.'
  },
  {
    question: 'How do I get started with Claude?',
    answer: 'Simply sign up for a free account and start chatting. No credit card required. Upgrade anytime for more features.'
  },
  {
    question: 'Is my data private and secure?',
    answer: 'Yes. Privacy and security are core to Claude. Your data is encrypted, never used for training, and you control your information.'
  },
  {
    question: 'What platforms does Claude support?',
    answer: 'Claude works on web, iOS, and Android. You can also use it via API and integrations for your workflow.'
  },
  {
    question: 'How does billing work?',
    answer: 'You can choose monthly or annual billing. Annual plans save you 17%. Enterprise plans are custom and billed per agreement.'
  },
  {
    question: 'Can I use Claude for my business?',
    answer: 'Absolutely. Claude offers team and enterprise solutions with collaboration, admin controls, and custom integrations.'
  },
  {
    question: 'What makes Claude different from other AI assistants?',
    answer: 'Claude is designed for safety, accuracy, and transparency. It is less prone to hallucinations and offers advanced creative and analytical tools.'
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our support team 24/7 via the contact form on our website or by emailing support@claude.ai.'
  },
  {
    question: 'Can I cancel or change my plan anytime?',
    answer: 'Yes. You can upgrade, downgrade, or cancel your plan at any time from your account settings.'
  },
  {
    question: 'Does Claude integrate with other tools?',
    answer: 'Yes. Claude offers integrations with Google Workspace, APIs, and more. Enterprise customers can request custom integrations.'
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-32 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-900 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto font-light">
            Everything you need to know about Claude. Can’t find the answer you’re looking for? Reach out to our support team.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full divide-y divide-gray-100 border rounded-2xl shadow-xl bg-white">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-0">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-6 px-4 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-all">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base px-4 pb-6 pt-0 font-light">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-16">
          <p className="text-gray-500 text-lg">
            Still have questions?{' '}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
} 