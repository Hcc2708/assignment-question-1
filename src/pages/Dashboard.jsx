import { createContext, useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";
import ListRow from "../component/list/ListRow"
// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";
import { object } from "prop-types";
const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  
  const arr = mockData.results.map((item, i)=> ({...item, ...timestamps.results[i]}))
  const handleRowClick = (row) => {
    setSelectedOrderDetails(row.executionDetails);
    setSelectedOrderTimeStamps(row.timestamps);
   
  };
  const handleInput = (event)=>{
    setSearchText(event.target.value)
    const detail = arr.find(obj=>obj["&id"] === searchText);
    setSelectedOrderDetails(detail.executionDetails);
    setSelectedOrderTimeStamps(detail.timestamps);
  }
  return (
    <div>

      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={mockData.header.returnedHits + " Orders"}/>
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={handleInput}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e)=>setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
        
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={arr} currency= {currency} onRowClick= {handleRowClick}/>
      </div>
    </div>
  );
};

export {Dashboard};
