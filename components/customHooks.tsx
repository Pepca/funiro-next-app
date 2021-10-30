import React, {useState, useEffect} from 'react'

interface IWindowDimensions {
  windowWidth: number
  windowHeight: number
}

const getWindowDimensions = (): IWindowDimensions => {
  const {innerWidth: windowWidth, innerHeight: windowHeight} = window
  return {
    windowWidth, windowHeight
  }
}

export const useWindowDimensions = (): IWindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<IWindowDimensions>(getWindowDimensions())

  useEffect(() => {
    setWindowDimensions(() => getWindowDimensions())
  }, [])

  return windowDimensions
}