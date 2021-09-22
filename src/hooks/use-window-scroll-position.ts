import { useEffect, useLayoutEffect } from 'react'
import { useLocalStorage } from './use-local-storage'

// sets scrollY position of window based on a setting condition, i.e. when api calls are done
// also sets the scroll position when unmounting, i.e. a user navigates to a different page
export default function useWindowScrollPosition(
  localStorageKey: string,
  setCondition: boolean,
): void {
  const [scrollYStorage, setScrollYStorage] = useLocalStorage(
    localStorageKey,
    0,
  )

  const handleScroll = () => {
    // Only store scroll position if we are not at the top and if the condition is true
    if (setCondition && window.scrollY !== 0) {
      setScrollYStorage(window.scrollY)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useLayoutEffect(() => {
    // if the setcondition is true (AKA everything in the DOM is loaded: fire off the scrollTo()!)
    if (setCondition) {
      setTimeout(() => {
        window.scrollTo(0, scrollYStorage)
      }, 0)
    }
  }, [setCondition, scrollYStorage])
}
