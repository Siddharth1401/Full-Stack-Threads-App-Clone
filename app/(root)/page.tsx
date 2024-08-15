import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default function Home() {
  return <div>
    {/* <ClerkProvider afterSignOutUrl="/"> */}
      <UserButton />
    {/* </ClerkProvider> */}
  </div>
}