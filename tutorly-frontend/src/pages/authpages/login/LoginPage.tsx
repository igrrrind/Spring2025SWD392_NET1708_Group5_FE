"use client"

import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { OAuthButtons } from "@/components/auth/oauth-buttons"
import { Link } from "react-router-dom"
import { AuthFormWrapper } from "../auth-form-wrapper"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <AuthFormWrapper title="Log in">
      <div className="flex flex-col space-y-2 text-center">
        <p className="text-sm text-muted-foreground leading-7">
          <Link to="/signup" className="underline underline-offset-4 hover:text-primary">
            Sign up as a student
          </Link>{" "}
          or{" "}
          <Link to="/signup-provider" className="underline underline-offset-4 hover:text-primary">
            <span><br className="text-3xl"/></span>Sign up as an education provider
          </Link>
        </p>
      </div>
      <div className="grid gap-6">
        <OAuthButtons includeApple={true} />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">or</span>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Your email" type="email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
            >
              Forgot your password?
            </Link>
          </div>
          <Button className="w-full bg-pink-500 hover:bg-pink-600">Log in</Button>
        </div>
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">
        By clicking Log in or Continue with, you agree to Tutorly{" "}
        <Link to="/terms" className="underline underline-offset-4 hover:text-primary">
          Terms of Use
        </Link>{" "}
        and{" "}
        <Link to="/privacy" className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </Link>
      </p>
    </AuthFormWrapper>
  )
}

