import { Link } from "react-router-dom";

// START COMMODITY DATA
export const dataCommodities = [
  {
    key: "1",
    commodities: "Pineapple",
    percentage: 89,
  },
  {
    key: "2",
    commodities: "Mango",
    percentage: 10,
  },
  {
    key: "3",
    commodities: "Banana",
    percentage: 54,
  },
  {
    key: "4",
    commodities: "Garlic",
    percentage: 30,
  },
  {
    key: "5",
    commodities: "Onion",
    percentage: 48,
  },
  {
    key: "6",
    commodities: "Cabbage",
    percentage: 50,
  },
  {
    key: "7",
    commodities: "Eggplant",
    percentage: 70,
  },
];

export const columnsCommodities = [
  {
    title: "Commodities",
    render: (text, record) => (
      <Link to={"/farmer/home/commodities/" + record.commodities}>{text}</Link>
    ),
    dataIndex: "commodities",
    key: "commodities",
  },
  {
    title: "Percentage",
    dataIndex: "percentage",
    key: "percentage",
  },
];
// END COMMODITY DATA

// REGIONDATA
export const dataRegion = [
  {
    key: "1",
    region: "Region I (Ilocos Region)",
    budget: "100,000",
  },
  {
    key: "2",
    region: "Region II (Cagayan Valley)",
    budget: "100,000",
  },
  {
    key: "3",
    region: "Region III (Central Luzon)",
    budget: "100,000",
  },
  {
    key: "4",
    region: "Region IV-A (CALABARZON)",
    budget: "100,000",
  },
  {
    key: "5",
    region: "Region IV-B (MIMAROPA)",
    budget: "100,000",
  },
  {
    key: "6",
    region: "Region V (Bicol Region)",
    budget: "100,000",
  },
  {
    key: "7",
    region: "National Capital Region (NCR)",
    budget: "100,000",
  },
  {
    key: "8",
    region: "Cordillera Administrative Region (CAR)",
    budget: "100,000",
  },
];

export const columnsRegion = [
  {
    title: "Region",
    render: (text, record) => (
      <Link to={"/farmer/home/commodities/Banana/" + record.region}>
        {text}
      </Link>
    ),
    dataIndex: "region",
    key: "region",
  },
  {
    title: "Budget",
    dataIndex: "budget",
    key: "budget",
  },
];

// END REGION DATA
