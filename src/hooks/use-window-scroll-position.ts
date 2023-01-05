import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { useLocalStorage } from './use-local-storage'

export const useWindowScrollPosition = (
  localStorageKey: string,
  setCondition: boolean,
) => {
  const [scrollYStorage, setScrollYStorage] = useLocalStorage(
    localStorageKey,
    0,
  )

  const currentScroll = useRef(0)

  const handleScroll = useCallback(() => {
    if (setCondition && window.scrollY !== 0) {
      currentScroll.current = window.scrollY
    }
  }, [setCondition])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      setScrollYStorage(currentScroll.current)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, setScrollYStorage])

  useLayoutEffect(() => {
    if (setCondition) {
      setTimeout(() => {
        window.scrollTo(0, scrollYStorage)
      }, 100)
    }
  }, [setCondition, scrollYStorage])
}
