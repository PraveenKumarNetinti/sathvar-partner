import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/settings/holidays',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/(with-sidebar)/settings/holidays"!</div>
}
