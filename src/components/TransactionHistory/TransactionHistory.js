import { RowHead, RowBody, ColumnBody, ColumnHead, Table } from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
	return (
		<Table>
			<thead>
				<RowHead type="head">
					<ColumnHead>Type</ColumnHead>
					<ColumnHead>Amount</ColumnHead>
					<ColumnHead>Currency</ColumnHead>
				</RowHead>
			</thead>

			<tbody>
				{items.map(({ id, type, amount, currency }) => (
					<RowBody type="body" key={id}>
						<ColumnBody type="transaction">{type}</ColumnBody>
						<ColumnBody>{amount}</ColumnBody>
						<ColumnBody>{currency}</ColumnBody>
					</RowBody>
				))}
			</tbody>
		</Table>
	);
};