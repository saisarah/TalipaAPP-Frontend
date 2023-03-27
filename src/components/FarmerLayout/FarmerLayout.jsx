import logo from "@/assets/logo-text.svg"
import { useAppContext } from "@/contexts/AppContext"
import { useFarmerContext } from "@/contexts/FarmerContext"
import { Avatar } from "antd"
import { NavLink as RouterNavLink } from "react-router-dom"

const NavLink = ({ children, ...props }) => {
  const activeClassName = "font-bold text-primary border-b-2 border-primary"
  const className = "text-base text-slate-500" 
  return (
    <RouterNavLink 
      className={({isActive}) => `${isActive ? activeClassName:''} ${className}`}
      {...props}
      >
      {children}
    </RouterNavLink>
  )
}

const Navbar = () => {

  const { user } = useFarmerContext()

  return (
    <header className="z-10 bg-white h-16 shadow-md fixed inset-x-0 top-0 px-4 flex items-center justify-center">
      <nav className="container flex items-center gap-12 max-w-screen-lg ">
        <div>
          <img src={logo} className="h-12"/>
        </div>
        <div className="flex gap-6 flex-grow">
          <NavLink to="/farmer/home">Home</NavLink>
          <NavLink to="/farmer/messages">Messages</NavLink>
          <NavLink to="/farmer/notifications">Notifications</NavLink>
          <NavLink to="/farmer/farmer-groups">Group</NavLink>
          <NavLink to="/farmer/orders">Orders</NavLink>
          <NavLink to="/farmer/wallet">Wallet</NavLink>
        </div>
        <div>
          <Avatar src={user.profile_picture} />
        </div>
      </nav>
    </header>
  )
}

export default function FarmerLayout({ children }){

  const { viewport } = useAppContext()

  if (viewport.isMedium)
    return (
      <div className="pt-16 min-h-screen flex flex-col">
        <Navbar />
        <div className="max-w-screen-lg flex-grow flex flex-col mx-auto w-full">
          {children}
        </div>
      </div>
    )

  return children
}