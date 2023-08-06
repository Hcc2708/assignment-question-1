import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";
import { OrderContext } from "../../pages/Dashboard";
import { useContext, useEffect, useMemo, useState } from "react";


const List = (props) => {
  // const[state, setState] = useState({});
  // useEffect(()=>{
  //   ListRow(state)
  // },[])
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {props.currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {props.rows.map((row) =>(
         <ListRow onClick={props.onRowClick} data ={row}  >
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[props.currency]}</ListRowCell>
            </ListRow>
         
        ))}
      </tbody>
    </table>
  );
};

export default List;
