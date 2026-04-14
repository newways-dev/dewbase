import { requireAuth } from '@/lib/auth-utils'
import { caller } from '@/trpc/server'

const Page = async () => {
  await requireAuth()

  await caller.getUsers()

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      Protected
    </div>
  )
}

export default Page
