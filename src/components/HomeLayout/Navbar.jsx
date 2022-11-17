import { HomeFilled, HomeOutlined, MessageFilled, MessageOutlined, WalletFilled, WalletOutlined, WechatFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import UserFilled from "../../icons/heroicons/UserFilled";
import UserOutlined from "../../icons/heroicons/UserOutlined";

export default function Navbar() {
  return (
    <div className="fixed bottom-0 flex w-full max-w-md bg-white text-xs shadow">

      <NavLink to='/' className={({isActive}) => `flex flex-grow flex-col items-center gap-1 py-3 ${isActive?'text-primary':'text-current'}`}>
        {({isActive}) => (
          <>
            {isActive ? <HomeFilled style={{ fontSize: 20 }} /> : <HomeOutlined style={{fontSize:20}} /> }
            Home
          </>
        )}
      </NavLink>

      <NavLink to='/wallet' className={({isActive}) => `flex flex-grow flex-col items-center gap-1 py-3 ${isActive?'text-primary':'text-current'}`}>
        {({isActive}) => (
          <>
            {isActive ? <WalletFilled style={{ fontSize: 20 }} /> : <WalletOutlined style={{fontSize:20}} /> }
            E-Wallet
          </>
        )}
      </NavLink>

      <NavLink to='/messages' className={({isActive}) => `flex flex-grow flex-col items-center gap-1 py-3 ${isActive?'text-primary':'text-current'}`}>
        {({isActive}) => (
          <>
            {isActive ? <MessageFilled style={{ fontSize: 20 }} /> : <MessageOutlined style={{fontSize:20}} /> }
            Messages
          </>
        )}
      </NavLink>

      <NavLink to='/account' className={({isActive}) => `flex flex-grow flex-col items-center gap-1 py-3 ${isActive?'text-primary':'text-current'}`}>
        {({isActive}) => (
          <>
            {isActive ? <UserFilled style={{ fontSize: 20 }} /> : <UserOutlined style={{fontSize:20}} /> }
            Account
          </>
        )}
      </NavLink>

    </div>
  );
}
