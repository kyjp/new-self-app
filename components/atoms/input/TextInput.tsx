import { Input } from '@headlessui/react'
import clsx from 'clsx'
import React, { FC } from 'react'

type TextInputType = {
    name: string
}

const TextInput: FC<TextInputType> = ({
    name
}) => {
  return (
    <>
        <Input
            type="text"
            name={name}
        />
    </>
  )
}

export default TextInput