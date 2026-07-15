"use client"
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Show, UserButton } from "@clerk/react";

const Header = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-3 border-b border-white/7 backdrop-blur-xl">
        {/* logo */}
        <h1 className="text-2xl font-bold">Interview Prep</h1>

        <div className="flex items-center gap-3">
             <Show when="signed-out">
              <SignInButton mode="modal">
                <Button variant="ghost">Sign In</Button>
              </SignInButton>

              <SignUpButton>
                <Button variant="ghost">Get Started</Button>
              </SignUpButton>

            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
        </div>
    </nav>
  );
};

export default Header;
