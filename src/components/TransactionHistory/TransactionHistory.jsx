import React from "react";
import styles from "./TransactionHistory.module.css"; // Імпортуємо стилі

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr>
                    <th className={styles.tableHeader}>Type</th>
                    <th className={styles.tableHeader}>Amount</th>
                    <th className={styles.tableHeader}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TransactionHistory;

