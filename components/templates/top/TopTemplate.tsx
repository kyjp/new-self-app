import Title from '@/components/atoms/title/Title'
import Modal from '@/components/molecules/modal/Modal'
import Form from '@/components/organisms/form/Form'
import Image from 'next/image'
import React from 'react'

const TopTemplate = () => {
  return (
    <main className="bg-gray-200 min-h-full h-screen py-8">
        <div className="mx-auto max-w-[1200px]">
            <article className="text-center">
                <Title>自慢したっター</Title>
                <figure
                    className="max-w-full w-[400px] m-auto"
                >
                    <Image
                        src="/jiman_hanashi_woman.png"                    
                        width={1428}
                        height={800}
                        alt="自慢"
                        className="max-w-full h-auto"
                    />
                </figure>
                <div className="mt-4">
                    <Modal
                        modalChildren={
                            <>
                                <Form />
                            </>
                        }
                    >
                        自慢したい
                    </Modal>
                </div>
            </article>
        </div>
    </main>
  )
}

export default TopTemplate