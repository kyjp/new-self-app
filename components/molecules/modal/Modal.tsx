'use client'
import Button from '@/components/atoms/button/Button'
import Dialog from '@/components/atoms/dialog/Dialog'
import React, { FC, ReactNode, useState } from 'react'

type ModalType = {
    children: ReactNode
    modalChildren: ReactNode
}

const Modal: FC<ModalType> = ({
    children,
    modalChildren
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(prev => !prev)
        console.log(isOpen)
    }
    return (
        <>
            <Button
                onClick={handleClick}
            >
                {children}
            </Button>
            <Dialog
                isOpen={isOpen}
                closeModal={handleClick}
            >
                {modalChildren}
                <div
                    className="mt-2 text-center"
                >
                    <Button
                        onClick={handleClick}
                    >
                        閉じる
                    </Button>
                </div>
            </Dialog>
        </>
    )
}

export default Modal