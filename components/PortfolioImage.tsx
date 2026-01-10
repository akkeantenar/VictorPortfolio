'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function PortfolioImage({ 
  width, 
  height, 
  className = '' 
}: { 
  width: number
  height: number
  className?: string
}) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50 bg-gradient-to-br from-blue-100 to-purple-100 ${className}`}>
      {!imageError ? (
        <Image
          src="/portfolio-image.jpg"
          alt="Victor Li - Senior UX/UI Engineer"
          width={width}
          height={height}
          className="object-cover w-full h-full"
          priority
          sizes="(max-width: 768px) 192px, 224px"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs font-medium p-4">
          <span className="text-center">
            Photo placeholder<br/>
            <span className="text-[10px]">Add: public/portfolio-image.jpg</span>
          </span>
        </div>
      )}
    </div>
  )
}
