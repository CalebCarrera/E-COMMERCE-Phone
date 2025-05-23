"use client"

import MaxWidthWrapper from "./MaxWidthWrapper";
import { useEffect, useState } from "react"
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
const Navbard = () => {
  const [user, setUser] = useState<any>(null) // Usuario
  const [isAdmin, setIsAdmin] = useState<boolean>(false) // Rol admin

  
  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)
      setIsAdmin(parsedUser?.role === "admin")
    }
  }, [])


  return (
    <nav
      className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b 
        border-gray-200 bg-white/75 backdrop-blur-lg transition-all"
    >
      <MaxWidthWrapper>
        <div
          className="flex h-14 items-center justify-between border-b
                border-gray-200"
        >
          <Link href="" className="flex z-40 font-semibold">
            case <span className="text-green-600">cobra</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user ? (
  
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign out
                </Link>
                {isAdmin ? (
                  <>
                    <Link
                      href="/Dashboard"
                      className={buttonVariants({
                        size: "sm",
                        variant: "ghost",
                      })}
                    >
                      Dashboard ✨
                    </Link>
                    <Link
                      href="/configure/upload"
                      className={buttonVariants({
                        size: "sm",
                        className: "hidden sm:flex items-center gap-1",
                      })}
                    >
                      Create case
                      <ArrowRight className="ml-1.5 h-5 w-5" />
                    </Link>
                  </>
                ) : null}
              </>
            ) : (
              <>
                <Link
                  href=""
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign up
                </Link>
                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Login
                </Link>
                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "bg-green-500 hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbard;
