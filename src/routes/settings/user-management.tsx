import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/settings/user-management',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/(with-sidebar)/settings/user-management"!</div>
}
