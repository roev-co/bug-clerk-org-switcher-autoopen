import { OrganizationSwitcher, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return <>
    <SignedOut>
      <h1>Sign in first to see the issue ...</h1>
    </SignedOut>
    <SignedIn>
      <h1>Below is an OrganizationSwitcher that is open by default</h1>
      <OrganizationSwitcher defaultOpen={true}/>
    </SignedIn>
  </>
;
}
