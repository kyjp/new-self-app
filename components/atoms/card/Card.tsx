import React, { FC, ReactNode } from 'react'

type CardType = {
    children: ReactNode
}

const Card: FC<CardType> = ({
    children
}) => {
  return (
    <section
        className="bg-white rounded p-4"
    >
        {children}
    </section>
  )
}

export default Card