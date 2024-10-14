"use client"
import React, { MouseEvent } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Button from '@/components/atoms/button/Button'

const schema = z.object({
    boast: z.string().min(1, { message: "自慢してください！！！" }),
})

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema)
    })
    const submitFn = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }
    return (
        <form>
            {errors.boast?.message && <p>{String(errors.boast.message)}</p>}
            <div>
                <textarea
                    className="border w-full rounded resize-none h-[200px] p-4 mt-1"
                    {...register("boast")}
                    autoComplete="off"
                    name="boast"
                    placeholder="あなたの自慢エピソードを記入してください"
                />
            </div>
            <div className="mt-4 flex justify-center">
                <Button
                    onClick={submitFn}
                >
                    自慢する
                </Button>
            </div>
        </form>
    )
}

export default Form