'use client'

import { OrbitingCircles } from '@/components/animated/orbiting-circles'
import { DESIGN_TOOLS } from '@/lib/constants/design'
import { useMediaQuery } from '@/lib/hooks/use-media-query'
import { cn } from '@/lib/utils'

export const OrbitingLogos = () => {
  const isTablet = useMediaQuery('(min-width: 48rem)')
  const isLaptop = useMediaQuery('(min-width: 64rem)')
  const isDesktop = useMediaQuery('(min-width: 80rem)')

  const secondCircleRadius = isDesktop ? 580 : isLaptop ? 500 : isTablet ? 400 : 320
  const firstCircleRadius = isDesktop ? 380 : isLaptop ? 300 : isTablet ? 250 : 190

  const designToolsArray = Object.values(DESIGN_TOOLS)

  return (
    <div className='desktop:h-[750px] relative z-50 flex h-[700px] w-full flex-col items-center justify-center overflow-hidden'>
      <OrbitingCircles speed={0.2} radius={secondCircleRadius} iconSize={isLaptop ? 75 : 60}>
        {designToolsArray.slice(10, designToolsArray.length).map(tool => {
          return (
            <div key={tool.LABEL} title={tool.LABEL}>
              <tool.ICON
                className={cn(
                  'laptop:size-[75px] size-[60px]',
                  tool.STROKE === 3
                    ? 'stroke-white stroke-3'
                    : tool.STROKE === 1
                      ? 'stroke-white stroke-1'
                      : null
                )}
              />
            </div>
          )
        })}
      </OrbitingCircles>
      <OrbitingCircles
        speed={0.25}
        radius={firstCircleRadius}
        iconSize={isLaptop ? 75 : 60}
        reverse>
        {designToolsArray.slice(0, 10).map(tool => {
          return (
            <div key={tool.LABEL} title={tool.LABEL}>
              <tool.ICON
                className={cn(
                  'laptop:size-[75px] size-[60px]',
                  tool.STROKE === 3
                    ? 'stroke-white stroke-3'
                    : tool.STROKE === 1
                      ? 'stroke-white stroke-1'
                      : null
                )}
              />
            </div>
          )
        })}
      </OrbitingCircles>
    </div>
  )
}
