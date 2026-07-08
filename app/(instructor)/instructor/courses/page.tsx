import { Button } from "@/components/ui/button"
import { auth } from "@clerk/nextjs/server"
import Link from "next/link"
import { redirect } from "next/navigation"

const CoursesPage = async () => {
  const { userId } = await auth()

  if (!userId) {
    return redirect("/sign-in")
  }

  return (
    <div className="px-6 py-4">
      <Link href="/instructor/create-course">
        <Button>Create New Courses</Button>
      </Link>
    </div>
  )
}

export default CoursesPage
