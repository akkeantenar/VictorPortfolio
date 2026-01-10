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
          onLoad={() => setImageError(false)}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 text-xs font-medium p-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="text-4xl mb-2">📷</div>
          <span className="text-center font-semibold mb-1">Photo Placeholder</span>
          <span className="text-[10px] text-center leading-tight">
            Add your image file:<br/>
            <code className="bg-white/50 px-2 py-1 rounded text-[9px] font-mono">
              public/portfolio-image.jpg
            </code>
          </span>
        </div>
      )}
    </div>
  )
}
