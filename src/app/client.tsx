'use client'

import { useTRPC } from '@/trpc/client'
import { useSuspenseQuery } from '@tanstack/react-query'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Client = () => {
  const trpc = useTRPC()
  const { data: users } = useSuspenseQuery(trpc.getUsers.queryOptions())

  return <div>Client Component: {JSON.stringify(users)}</div>
}
