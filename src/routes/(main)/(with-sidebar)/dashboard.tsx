import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/(with-sidebar)/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/dashboard"!</div>
}
