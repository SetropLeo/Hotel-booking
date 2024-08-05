import { SignIn } from "@clerk/nextjs";
import ClerkLayout from "../../layout";

const Page = () => {
  return (
    <ClerkLayout>
      <SignIn />
    </ClerkLayout>
  );
};

export default Page;
