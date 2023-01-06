import styles from "./ViewList.module.css";

function ViewList({ list, sum, saved }) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Disc %</th>
            <th>Total $</th>
            <th>Saved $</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.discount}</td>
              <td>{item.total.toFixed(2)}</td>
              <td>{item.yousave.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.containerSum}>
        Total sum: $<span className={styles.sum}>{sum.toFixed(2)}</span><br/>Total save: $<span className={styles.sum}>{saved.toFixed(2)}</span>
      </div>
    </div>
  );
}
export default ViewList;
