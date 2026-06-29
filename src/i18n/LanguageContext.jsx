import { createContext, useState, useContext } from 'react'
import es from './es.json'
import en from './en.json'

const strings = { es, en }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')

  function t(key) {
    return key.split('.').reduce((obj, k) => obj?.[k], strings[lang]) ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  return useContext(LanguageContext)
}
