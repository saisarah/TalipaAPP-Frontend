import { Link } from "react-router-dom";

// START COMMODITY DATA
export const dataCommodities = [
  {
    key: "1",
    commodities: "Pineapple",
    percentage: 10,
  },
  {
    key: "2",
    commodities: "Mango",
    percentage: 20,
  },
  {
    key: "3",
    commodities: "Banana",
    percentage: 15,
  },
  {
    key: "4",
    commodities: "Garlic",
    percentage: 15,
  },
  {
    key: "5",
    commodities: "Onion",
    percentage: 30,
  },
  {
    key: "6",
    commodities: "Cabbage",
    percentage: 6,
  },
  {
    key: "7",
    commodities: "Eggplant",
    percentage: 4,
  },
];

// END COMMODITY DATA

// REGIONDATA
export const dataRegion = [
  {
    key: "1",
    region: "Region I (Ilocos Region)",
    budget: 100000,
    quantity: 2000,
    commodity: "Manga",
    name: "John Doe",
  },
  {
    key: "2",
    region: "Region II (Cagayan Valley)",
    budget: 100000,
    quantity: 2000,
    commodity: "Manga",
    name: "Jane Doe",
  },
  {
    key: "3",
    region: "Region III (Central Luzon)",
    budget: 100000,
    quantity: 2000,
    commodity: "Manga",
    name: "Michael Johnson",
  },
  {
    key: "4",
    region: "Region IV-A (CALABARZON)",
    budget: 100000,
    quantity: 2000,
    commodity: "Manga",
    name: "Emily Williams",
  },
  {
    key: "5",
    region: "Region IV-B (MIMAROPA)",
    budget: 100000,
    quantity: 2000,
    commodity: "Manga",
    name: "James Garcia",
  },
  {
    key: "6",
    region: "Region V (Bicol Region)",
    budget: 100000,
    quantity: 2000,
    commodity: "Manga",
    name: "Sarah Rodriguez",
  },
  {
    key: "7",
    region: "National Capital Region (NCR)",
    budget: 100000,
    quantity: 2000,
    commodity: "Manga",
    name: "David Gonzales",
  },
  {
    key: "8",
    region: "Cordillera Administrative Region (CAR)",
    budget: 100000,
    quantity: 2000,
    commodity: "Manga",
    name: "Jessica Flores",
  },
];

// export const columnsRegion = [
//   {
//     title: "Region",
//     render: (text, record) => (
//       <Link to={"/farmer/home/commodities/Banana/" + record.region}>
//         {text}
//       </Link>
//     ),
//     dataIndex: "region",
//     key: "region",
//   },
//   {
//     title: "Budget",
//     dataIndex: "budget",
//     key: "budget",
//   },
// ];

// END REGION DATA
