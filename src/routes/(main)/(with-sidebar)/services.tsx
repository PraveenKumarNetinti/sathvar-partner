import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/(with-sidebar)/services')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/services"!</div>
}
