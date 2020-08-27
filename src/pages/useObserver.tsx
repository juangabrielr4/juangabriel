import { useEffect, useRef, useState } from "react"

const useObserver = (options: { threshold: number; root: null }) => {
  const [elements, setElements] = useState([] as any)
  const [entries, setEntries] = useState([] as any)

  interface ObservedEl extends IntersectionObserver {
    disconnect: () => void
    observe: (element:any) => void
  }

  const observer = useRef<ObservedEl| null>(null)

  const observerOptions = options || {}

  useEffect(() => {
    if (elements.length) {
      observer.current = new IntersectionObserver((observedEntries) => {
        setEntries(observedEntries)
      }, observerOptions)

      elements.forEach((element:Element) => observer.current && observer.current.observe(element))
    }
    return () => {
      if(observer.current){
        observer.current.disconnect()
      }
    }
  }, [elements, observerOptions])

  return [observer.current, setElements, entries]
}

export default useObserver
