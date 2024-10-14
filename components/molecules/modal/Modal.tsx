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
                <div className="relative">
                    {modalChildren}
                    <div
                        className="absolute -top-5 -right-5 bg-black hover:opacity-60 flex justify-center items-center rounded-full"
                    >
                        <button
                            onClick={handleClick}
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 stroke-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default Modal