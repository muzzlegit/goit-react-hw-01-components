import PropTypes from 'prop-types';
//STYLES
import { Box, RowCell, ColCell } from './TransactionHistory.styled';

const TransactionHistory = ({ transactions }) => {
  return (
    <Box>
      <table>
        <thead>
          <tr>
            <ColCell>Type</ColCell>
            <ColCell>Amount</ColCell>
            <ColCell>Currency</ColCell>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <RowCell background={'primaryDark'} color={'pGreen'}>
                  {type}
                </RowCell>
                <RowCell>{amount}</RowCell>
                <RowCell>{currency}</RowCell>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
