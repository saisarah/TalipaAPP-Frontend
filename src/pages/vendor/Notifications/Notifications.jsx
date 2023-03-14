import { useTitle } from "@/contexts/VendorContext";
import { Avatar } from "antd";

export default function Notifications() {
  return (
    <div className="bg-white">
      <h1 className="px-4 pt-4">Today</h1>
      <Notif
        className="py-2"
        name="Joe doe"
        date="1 minute ago"
        img="https://imgs.search.brave.com/_Ao8GbPsMbiGUmnSUVbD2wq9DUpKkvCg3nxNGmzevVY/rs:fit:1200:730:1/g:ce/aHR0cHM6Ly9hOXA5/bjJ4Mi5zdGFja3Bh/dGhjZG4uY29tL3dw/LWNvbnRlbnQvYmxv/Z3MuZGlyLzEvZmls/ZXMvMjAyMS8wMy9C/bGFjay1GYXJtZXJz/LmpwZw"
        description="Order Bananas is deliver. Your feedback matters to other! rate the product and get up to 0.40 coins"
      />

      <Notif
        name="Nickolas Marvin"
        date="5 hours ago"
        img="https://imgs.search.brave.com/5Qmm2VP9AwGo_WcTY3s0MGmPjFXqjSioSJjnmfl7b-Q/rs:fit:1200:1039:1/g:ce/aHR0cHM6Ly9wZWFy/bHBheS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDMv/SGVscGluZy1GYXJt/ZXJzLWluLXRoZS1Q/aGlsaXBwaW5lcy13/aXRoLUFjY2Vzc2li/bGUtRmluYW5jaWFs/LUhlbHAuanBn"
        description="Order Manggoes is Pending. Your Product is Process. Please wait for the update of products"
      />

      <h1 className="px-4 pt-4">This Week</h1>
      <Notif
        name="Carolina Schroeder"
        date="5 hours ago"
        img="https://imgs.search.brave.com/CIFrI1-xBU3NzdFIZi1nZTTFIpCYheBfGKSIMrbWIv4/rs:fit:1200:800:1/g:ce/aHR0cDovL2ltYWdl/cy5odWZmaW5ndG9u/cG9zdC5jb20vMjAx/NC0xMS0yNi1IZWxz/aW5nSnVuY3Rpb25G/YXJtLmpwZw"
        description="Order Onions is Confirm. This product is process by the farmer."
      />
      <Notif
        name="Morgan Dicki"
        date="2 days ago"
        img="https://imgs.search.brave.com/3XeVAFe8TpfZNhd_oSnZLYUWrPRXVBvl0W3vvEQI8XQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdGhlZmFj/ZXNvZmNhbnRvbmJh/bGxncm91bmQuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzEyL3NodXR0ZXJz/dG9ja183Mzk0NTAz/LU1hbGUtRmFybWVy/LWUxNTE1NTMzNDU2/NzQxLmpwZz9zc2w9/MQ"
        description="Order Eggplants is Cancelled. Your Order is cancelled. Thank you for the support. look for another products! we OFFER"
      />
      <Notif
        name="Bennett Schmeler"
        date="5 hours ago"
        img="https://imgs.search.brave.com/F8xkeKJSR3S-NcR40TH5bF7WB_RIDUDn8fNe6up5QKc/rs:fit:1200:907:1/g:ce/aHR0cHM6Ly93d3cu/dGhlbmF0aW9uLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8wNy9mb29kLWJs/YWNrLWZhcm1lcnMt/YXAtaW1nLmpwZw"
        description="Order Pineapple is Pending. Your Product is Process. Please wait for the update of products"
      />
    </div>
  );
}

function Notif({ name, date, description, update, img }) {
  useTitle("Notifications");
  return (
    <div className="mx-5 flex flex-row gap-8 border-b-2 py-2 px-2">
      <div>
        <Avatar size="large" src={img} alt="Avatar" />
      </div>
      <div>
        <span className="font-bold">{name}</span>
        <br />
        <span className="text-xsm text-slate-400">{description}</span>
        <br />
        <span> {date}</span>
      </div>
    </div>
  );
}
