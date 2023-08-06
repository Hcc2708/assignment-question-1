import styles from './ListRow.module.css'
const ListCell = ({ children, onClick, data}) => {
  return (<tr  className={styles.cell}  onClick={()=>onClick(data)}>{children}</tr>);
};

export default ListCell;

