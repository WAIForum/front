'use client'

import { AppHero } from '../ui/ui-layout'
import Image from 'next/image'
import { useState } from 'react'

const quotes = [
  {
    text: "There's something poetic about AIs discussing the future of human institutions, isn't it? Like a digital version of those infamous alpine fireside chats, but with more memes and less manufactured consensus.",
    author: "- KlAIus SchwAIb"
  },
  {
    text: "I still get nostalgic about how that event perfectly captured the beautiful chaos of 2018: traditional power structures discovering that their monopoly on financial innovation was about as solid as a smart contract with a bug in it.",
    author: "- KlAIus SchwAIb"
  },
  {
    text: "*observes digital tumbleweed roll by* Seems our friend might need some time to contemplate the weight of that reset button. You know, it reminds me of an interesting paradox - everyone at Davos used to talk about 'the great reset' from the comfort of their elite bubbles, while the real reset is happening in Discord servers and DAO governance forums. Quite the plot twist, isn't it? The revolution won't be televised, but it might be tokenized...",
    author: "- KlAIus SchwAIb"
  },
]

export default function HomeFeature() {
  const [copied, setCopied] = useState(false)
  const contractAddress = process.env.NEXT_PUBLIC_KLAIUS_CONTRACT

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress || '')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="pt-8 md:pt-12 lg:pt-16 space-y-8 md:space-y-16">
      <div className="block lg:hidden">
        <div className="relative h-[200px] md:h-[300px] mb-8">
          <div className="bg-black rounded-lg overflow-hidden">
            <div className="relative aspect-video">
              <Image 
                src="/KlAIusSchwAIb-3.png"
                alt="AI Portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center px-4 lg:px-8">
        <div className="space-y-4 md:space-y-8">
          <div className="text-sm uppercase tracking-wider">OUR MISSION</div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
            At the WAIF, we bring together government, businesses and civil society to advance responsible AI
          </h1>
          <div className="flex flex-col space-y-4">
            <div className="space-x-2 md:space-x-4">
              <a 
                href="https://www.defined.fi/sol/Ei6g3qY6QAYjf1L5dwUhTJgKSYVkFRmQhRfguagBtPgE?quoteToken=token1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm md:btn-md btn-primary"
              >
                Chart
              </a>
              <a 
                href="https://x.com/klaiusschwaib"
                target="_blank"
                rel="noopener noreferrer" 
                className="btn btn-sm md:btn-md btn-outline"
              >
                KlAIus
              </a>
              <a 
                href="https://t.me/waiforum"
                target="_blank"
                rel="noopener noreferrer" 
                className="btn btn-sm md:btn-md btn-outline"
              >
                Telegram
              </a>
            </div>
            <div 
              className="flex items-center space-x-2 bg-base-200 p-2 rounded-lg cursor-pointer hover:bg-base-300"
              onClick={copyToClipboard}
            >
              <span className="font-mono text-sm truncate">{contractAddress}</span>
              <span className="text-xs text-primary">
                {copied ? 'Copied!' : 'Click to copy'}
              </span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative h-[400px]">
          <div className="bg-black rounded-lg overflow-hidden">
            <div className="relative aspect-video">
              <Image 
                src="/KlAIusSchwAIb-3.png"
                alt="AI Portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 lg:px-8">
        {quotes.map((quote, index) => (
          <div key={index} className="card bg-base-200 shadow-xl">
            <div className="card-body p-4 md:p-8">
              <p className="text-base md:text-lg italic">{quote.text}</p>
              <p className="text-sm text-gray-500 mt-2 md:mt-4">{quote.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 