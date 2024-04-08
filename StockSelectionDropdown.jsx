import PropTypes from 'prop-types';
const StockSelectionDropdown = ({ data, selectedStock, handleChangeStock }) => {
  return (
    <select id='dropdown1' value={selectedStock} onChange={handleChangeStock}>
      {data.map((stock) => (
        <option id='dropdown-content1' key={stock.stockName} value={stock.stockName}>
          {stock.stockName}
        </option>
      ))}
    </select>
  );
};

StockSelectionDropdown.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      stockName: PropTypes.string.isRequired,
      info: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.string.isRequired,
          open: PropTypes.number.isRequired,
          close: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  selectedStock: PropTypes.string.isRequired,
  handleChangeStock: PropTypes.func.isRequired,
};

export default StockSelectionDropdown;
