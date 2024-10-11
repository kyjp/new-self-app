import { FC, ReactNode } from 'react'

type TitleProps = {
    children: ReactNode
}

const Title: FC<TitleProps> = ({
    children
}) => {
  return (
    <h1 className="text-3xl font-bold">{children}</h1>
  )
}

export default Title