'use client'

import { IconCheck } from '@andrsrxn/icons'
import {
  type ComponentProps,
  createContext,
  type HTMLAttributes,
  type ReactNode,
  useContext,
} from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ChoiceBoxSingleValue = string | number | undefined

interface ChoiceBoxSingleContextType {
  selected?: ChoiceBoxSingleValue
  setSelected?: (selected: ChoiceBoxSingleValue) => void
}

export interface ChoiceBoxSingleProps extends HTMLAttributes<HTMLDivElement> {
  value?: ChoiceBoxSingleValue
  onValueChange?: (selected: ChoiceBoxSingleValue) => void
  children: ReactNode
}

const ChoiceBoxSingleContext = createContext<ChoiceBoxSingleContextType | undefined>(undefined)

const useChoiceBoxSingle = () => {
  const context = useContext(ChoiceBoxSingleContext)
  if (context === undefined) {
    throw new Error('ChoiceBoxSingle components must be wrapped in <ChoiceBoxSingle />')
  }
  return context
}

export const ChoiceBoxSingle = ({
  onValueChange,
  children,
  value,
  ...props
}: ChoiceBoxSingleProps) => {
  return (
    <ChoiceBoxSingleContext.Provider
      value={{
        selected: value,
        setSelected: onValueChange,
      }}>
      <div {...props}>{children}</div>
    </ChoiceBoxSingleContext.Provider>
  )
}

interface ChoiceBoxSingleItemContextType {
  value: ChoiceBoxSingleValue
}

const ChoiceBoxSingleItemContext = createContext<ChoiceBoxSingleItemContextType | undefined>(
  undefined
)

const useChoiceBoxSingleItem = () => {
  const context = useContext(ChoiceBoxSingleItemContext)
  if (context === undefined) {
    throw new Error('ChoiceBoxSingleItems components must be wrapped in <ChoiceBoxSingleItem />')
  }
  return context
}

interface ChoiceBoxSinglePropsItem extends Omit<ComponentProps<typeof Button>, 'value'> {
  value: ChoiceBoxSingleValue
}

export const ChoiceBoxSingleItem = ({
  children,
  className,
  value,
  ...props
}: ChoiceBoxSinglePropsItem) => {
  const { setSelected, selected } = useChoiceBoxSingle()

  const isSelected = selected === value

  return (
    <ChoiceBoxSingleItemContext.Provider value={{ value }}>
      <Button
        type='button'
        onClick={() => {
          if (isSelected) {
            setSelected?.('')
            return
          }
          setSelected?.(value)
        }}
        variant='outline'
        {...props}
        className={cn(
          'h-auto min-h-0 w-full rounded-none border border-transparent bg-neutral-900! p-0',
          isSelected && 'bg-neutral-800!',
          className
        )}
        size='default'>
        {children}
      </Button>
    </ChoiceBoxSingleItemContext.Provider>
  )
}

export const ChoiceBoxSingleIndicator = ({ className, ...props }: ComponentProps<'span'>) => {
  const { selected } = useChoiceBoxSingle()
  const { value } = useChoiceBoxSingleItem()

  const isSelected = selected === value

  return (
    <span
      {...props}
      className={cn(
        'border-input bg-input relative flex size-5 items-center justify-center rounded-full border',
        className
      )}>
      <IconCheck
        className={cn('size-4 opacity-0 transition-opacity', isSelected && 'opacity-100')}
      />
    </span>
  )
}
