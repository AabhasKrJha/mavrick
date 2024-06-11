"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";


import { LoginSchema } from "@/schemas"
import { login } from "@/actions/login"
// import { FormSuccess } from "@/components/forms/form-success"
import { FormError } from "@/components/forms/form-error"


export function LoginForm() {

  // const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  // const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
      defaultValues: {
        username: "",
        password: ""
      },
    })
    
    const onSubmit = (values : z.infer<typeof LoginSchema>) => {
      setError("");
      // setSuccess("");
      startTransition(() => {
          login(values)
          .then((data) => {
              setError(data?.error);
              // setSuccess(data?.success);
          });
      })
  }

  return (
    <Form {...form}>
        
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username / Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username or email" {...field} disabled={isPending}/>
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" {...field} disabled={isPending}/>
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error}/>
        {/* <FormSuccess message={success}/> */}
        <Button type="submit" disabled={isPending}>Login</Button>
      </form>
    </Form>
  )
}
