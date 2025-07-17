import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/settings/operational-details',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/(with-sidebar)/settings/operational-details"!</div>
}
