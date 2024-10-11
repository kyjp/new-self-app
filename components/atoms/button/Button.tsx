import { Button as HeadlessButton } from '@headlessui/react'
import { FC, MouseEvent, ReactNode } from 'react'

type ButtonType = {
    children: ReactNode
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<ButtonType> = ({
    children,
    onClick
}) => {
  return (
    <HeadlessButton
        className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-300"
        data-hover
        data-active
        type="button"
        onClick={onClick}
    >
      {children}
    </HeadlessButton>
  )
}

export default Button