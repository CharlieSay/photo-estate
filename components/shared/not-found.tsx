import { Button } from "@/components/ui/button"
import Link from "next/link"

interface NotFoundProps {
  message?: string
}

export function NotFound({ message = "Page not found" }: NotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">{message}</p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}