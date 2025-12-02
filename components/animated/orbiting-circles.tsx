import { Children, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface OrbitingCirclesProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 0.5,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed
  return (
    <>
      {path && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          className='pointer-events-none absolute inset-0 size-full'>
          <circle className='stroke-border stroke-2' cx='50%' cy='50%' r={radius} fill='none' />
        </svg>
      )}
      {Children.map(children, (child, index) => {
        const angle = (360 / Children.count(children)) * index
        return (
          <div
            style={
              {
                '--orbit-duration': calculatedDuration,
                '--orbit-radius': radius,
                '--orbit-angle': angle,
                '--orbit-icon-size': `${iconSize}px`,
              } as CSSProperties
            }
            className={cn(
              'animate-orbit absolute flex size-(--orbit-icon-size) transform-gpu items-center justify-center rounded-full',
              reverse && 'direction-[reverse]',
              className
            )}
            {...props}>
            {child}
          </div>
        )
      })}
    </>
  )
}
