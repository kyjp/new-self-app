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
                    {...register("boast")}
                    autoComplete="off"
                    name="boast"
                />
            </div>
            <Button
                onClick={submitFn}
            >
                自慢する
            </Button>
        </form>
    )
}

export default Form