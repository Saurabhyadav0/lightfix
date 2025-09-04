"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import { Shield, Menu, X, Coins } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const { user, logout } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-[var(--navbar)] border-b border-border sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-white">LightFix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/report" className="hover:text-primary transition-colors text-white">
              Report Issue
            </Link>
            <Link href="/my-complaints" className="hover:text-primary transition-colors text-white">
              My Reports
            </Link>
            {user?.role === "ADMIN" && (
              <Link href="/admin" className="hover:text-primary transition-colors text-white">
                Admin
              </Link>
            )}
          </div>

          {/* Desktop Right Controls */}
          <div className="hidden md:flex items-center gap-4">
            {user && (
              <div className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full text-sm font-medium text-black">
                <Coins className="h-4 w-4 text-yellow-500" />
                <span>{user?.coins || 0}</span>
              </div>
            )}
            <ThemeToggle />
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-300">Welcome, {user.name}</span>
                <Button variant="outline" onClick={logout}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/auth/login">
                  <Button variant="outline">Sign In</Button>
                </Link>
                <Link href="/auth/register">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            {user && (
              <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full text-xs font-medium text-black">
                <Coins className="h-3 w-3 text-yellow-500" />
                <span>{user.coins}</span>
              </div>
            )}
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/report"
                className="block px-3 py-2 hover:text-primary transition-colors text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Report Issue
              </Link>
              <Link
                href="/my-complaints"
                className="block px-3 py-2 hover:text-primary transition-colors text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Reports
              </Link>
              {user?.role === "ADMIN" && (
                <Link
                  href="/admin"
                  className="block px-3 py-2 hover:text-primary transition-colors text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admin
                </Link>
              )}
              <div className="border-t border-border pt-4">
                {user ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-sm text-gray-300">Welcome, {user.name}</div>
                    <Button variant="outline" onClick={logout} className="w-full bg-transparent text-white">
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full bg-transparent text-white">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/auth/register" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full">Sign Up</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}






// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { useAuth } from "@/hooks/use-auth"
// import { Shield, Menu, X, Coins } from "lucide-react" // ⭐ Added coin icon
// import { useState } from "react"
// import { ThemeToggle } from "@/components/theme-toggle"

// export function Navbar() {
//   const { user, logout } = useAuth()
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//    {console.log(user)}

//   return (
//     // <nav className="bg-background border-b border-border sticky top-0 z-50">
//     <nav className="bg-[var(--navbar)] text-[var(--navbar-foreground)] border-b border-border sticky top-0 z-50 text-white dark:text-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <Shield className="h-8 w-8 text-primary" />
//             <span className="font-bold text-xl text-foreground">LightFix</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/report" className="text-foreground hover:text-primary transition-colors">
//               Report Issue
//             </Link>
//             <Link href="/my-complaints" className="text-foreground hover:text-primary transition-colors">
//               My Reports
//             </Link>
//             {user?.role === "ADMIN" && (
//               <Link href="/admin" className="text-foreground hover:text-primary transition-colors">
//                 Admin
//               </Link>
//             )}
//           </div>

//           {/* Desktop Right Controls */}
//           <div className="hidden md:flex items-center gap-4">
//             {/* ⭐ Coin Balance */}
//             {user && (
//               <div className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full text-sm font-medium">
//                 <Coins className="h-4 w-4 text-yellow-500" />
//                 <span className="text-black">{user?.coins || 0 }</span>
//               </div>
//             )}
//             <ThemeToggle />
//             {user ? (
//               <div className="flex items-center gap-4">
//                 <span className="text-sm text-muted-foreground">Welcome, {user.name}</span>
//                 <Button variant="outline" onClick={logout}>
//                   Sign Out
//                 </Button>
//               </div>
//             ) : (
//               <div className="flex items-center gap-2">
//                 <Link href="/auth/login">
//                   <Button variant="outline">Sign In</Button>
//                 </Link>
//                 <Link href="/auth/register">
//                   <Button>Sign Up</Button>
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile controls */}
//           <div className="md:hidden flex items-center gap-2">
//             {user && (
//               <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full text-xs font-medium">
//                 <Coins className="h-3 w-3 text-yellow-500" />
//                 <span>{user.coins}</span>
//               </div>
//             )}
//             <ThemeToggle />
//             <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//               {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {mobileMenuOpen && (
//           <div className="md:hidden border-t border-border">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <Link
//                 href="/report"
//                 className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Report Issue
//               </Link>
//               <Link
//                 href="/my-complaints"
//                 className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 My Reports
//               </Link>
//               {user?.role === "ADMIN" && (
//                 <Link
//                   href="/admin"
//                   className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Admin
//                 </Link>
//               )}
//               <div className="border-t border-border pt-4">
//                 {user ? (
//                   <div className="space-y-2">
//                     <div className="px-3 py-2 text-sm text-muted-foreground">Welcome, {user.name}</div>
//                     <Button variant="outline" onClick={logout} className="w-full bg-transparent">
//                       Sign Out
//                     </Button>
//                   </div>
//                 ) : (
//                   <div className="space-y-2">
//                     <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
//                       <Button variant="outline" className="w-full bg-transparent">
//                         Sign In
//                       </Button>
//                     </Link>
//                     <Link href="/auth/register" onClick={() => setMobileMenuOpen(false)}>
//                       <Button className="w-full">Sign Up</Button>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }
