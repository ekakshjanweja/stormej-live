import { getSelfWithUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import { Navbar } from "./_components/navbar";
import { Container } from "./_components/container";
import { Sidebar } from "./_components/sidebar";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
  const self = await getSelfWithUsername(params.username);

  if (!self) {
    return redirect("/");
  }

  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container> {children}</Container>
      </div>
    </>
  );
};

export default CreatorLayout;
