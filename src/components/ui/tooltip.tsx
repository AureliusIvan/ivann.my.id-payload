'use client'

import { cn } from '@/utilities/ui'
import * as React from 'react'

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
  delay?: number
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, side = 'top', className, delay = 200 }) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout | null>(null)

  const showTooltip = () => {
    if (timeoutId) clearTimeout(timeoutId)
    const id = setTimeout(() => setIsVisible(true), delay)
    setTimeoutId(id)
  }

  const hideTooltip = () => {
    if (timeoutId) clearTimeout(timeoutId)
    setIsVisible(false)
  }

  const tooltipClasses = cn(
    'absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg opacity-0 pointer-events-none transition-all duration-200',
    {
      'opacity-100': isVisible,
      'bottom-full left-1/2 transform -translate-x-1/2 mb-2': side === 'top',
      'top-full left-1/2 transform -translate-x-1/2 mt-2': side === 'bottom',
      'right-full top-1/2 transform -translate-y-1/2 mr-2': side === 'left',
      'left-full top-1/2 transform -translate-y-1/2 ml-2': side === 'right',
    },
    className
  )

  const arrowClasses = cn(
    'absolute w-2 h-2 bg-gray-900 transform rotate-45',
    {
      'top-full left-1/2 transform -translate-x-1/2 -mt-1': side === 'top',
      'bottom-full left-1/2 transform -translate-x-1/2 -mb-1': side === 'bottom',
      'top-1/2 left-full transform -translate-y-1/2 -ml-1': side === 'left',
      'top-1/2 right-full transform -translate-y-1/2 -mr-1': side === 'right',
    }
  )

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
      </div>
      <div className={tooltipClasses}>
        {content}
        <div className={arrowClasses} />
      </div>
    </div>
  )
}

export { Tooltip }