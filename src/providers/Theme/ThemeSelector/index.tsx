'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React, { useState } from 'react'

import type { Theme } from './types'

import { useTheme } from '..'
import { themeLocalStorageKey } from './types'

export const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme()
  const [value, setValue] = useState('')

  const onThemeChange = (themeToSet: Theme & 'auto') => {
    if (themeToSet === 'auto') {
      setTheme(null)
      setValue('auto')
    } else {
      setTheme(themeToSet)
      setValue(themeToSet)
    }
  }

  React.useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    setValue(preference ?? 'auto')
  }, [])

  return (
    <Select onValueChange={onThemeChange} value={value}>
      <SelectTrigger
        aria-label="Select a theme"
        className="w-auto bg-transparent gap-2 pl-0 md:pl-3 border-none transition-all duration-200 hover:bg-accent/50 hover:scale-105"
      >
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="animate-in fade-in-0 zoom-in-95">
        <SelectItem value="auto" className="cursor-pointer">Auto</SelectItem>
        <SelectItem value="light" className="cursor-pointer">Light</SelectItem>
        <SelectItem value="dark" className="cursor-pointer">Dark</SelectItem>
      </SelectContent>
    </Select>
  )
}
