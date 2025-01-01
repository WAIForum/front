'use client'

import { AppHero } from '../ui/ui-layout'
import Image from 'next/image'

const centres = [
  {
    title: 'Centre for Regions, Trade and Geopolitics',
    image: '/logo2.jpg',
  },
  {
    title: 'Centre for Nature and Climate',
    image: '/logo1.jpg',
  },
  {
    title: 'Centre for the New Economy and Society',
    image: '/logo2.jpg',
  },
  {
    title: 'Centre for Energy and Materials',
    image: '/logo3.jpg',
  },
]

export default function HomeFeature() {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 lg:px-8">
        <div className="space-y-8">
          <div className="text-sm uppercase tracking-wider">OUR MISSION</div>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            At the WAIF, We bring together government, businesses and civil society to advance responsible AI
          </h1>
          <button className="btn btn-primary">More about the Forum →</button>
        </div>
        <div className="relative h-[300px] lg:h-[400px]">
          <div className="bg-black rounded-lg overflow-hidden">
            <div className="relative aspect-video">
              <Image 
                src="/KlAIusSchwAIb-3.png"
                alt="AI Portrait"
                fill
                className="object-cover"
              />
            
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-2xl font-bold">How we drive impact</h2>
          <div className="flex justify-center gap-4">
            <button className="btn btn-primary">Centres</button>
            <button className="btn btn-outline">Meetings</button>
            <button className="btn btn-outline">Stakeholders</button>
          </div>
        </div>

        <div className="bg-base-200 p-8 rounded-lg mb-12">
          <div className="space-y-4">
            <div className="uppercase text-sm tracking-wider">ABOUT THE CENTRES</div>
            <h2 className="text-3xl font-bold">We tackle global AI challenges through our Centres</h2>
            <p className="text-lg opacity-80">
              Our Centre teams convert ambition into focused action through structured initiatives and insight generation.
            </p>
            <button className="btn btn-outline">More about our Centres →</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {centres.map((centre) => (
            <div key={centre.title} className="card bg-base-100 shadow-xl">
              <figure className="relative h-48">
                <Image
                  src={centre.image}
                  alt={centre.title}
                  fill
                  className="object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{centre.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 