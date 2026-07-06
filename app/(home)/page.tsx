import { UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="">
      <h1 className="">
        <UserButton  />
        Home
      </h1>
    </div>
  )
}
