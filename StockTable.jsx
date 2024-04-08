import PropTypes from 'prop-types';

const StockTable = ({ visibleData }) => {
  return (
    <table className="stockTable">
      <thead>
        <tr>
          <th id='date1'>Date</th>
          <th id='open1'>Open</th>
          <th id='close1'>Close</th>
        </tr>
      </thead>
      <tbody>
        {visibleData.map((entry) => (
          <tr key={entry.date}>
            <td>{entry.date}</td>
            <td className={entry.open > entry.close ? 'green' : 'red'}>{entry.open}</td>
            <td className={entry.close > entry.open ? 'green' : 'red'}>{entry.close}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

StockTable.propTypes = {
  visibleData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      open: PropTypes.number.isRequired,
      close: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default StockTable;
