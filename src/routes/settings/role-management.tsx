import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/settings/role-management',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/(with-sidebar)/settings/role-management"!</div>
}
