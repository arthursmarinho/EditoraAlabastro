import {SignIn} from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center pt-32 bg-gradient-to-bl">
      <SignIn />
    </div>
  );
}
