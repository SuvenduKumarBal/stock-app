import PropTypes from 'prop-types';

const PaginationButtons = ({ currentPage, handlePageChange, endIndex, stockData }) => {
  const handlePrevClick = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    handlePageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button id='btn1' disabled={currentPage === 1} onClick={handlePrevClick}>
        Prev
      </button>
      <button id='btn2' disabled={endIndex >= stockData.info.length} onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

PaginationButtons.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  endIndex: PropTypes.number.isRequired,
  stockData: PropTypes.shape({
    stockName: PropTypes.string.isRequired,
    info: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        open: PropTypes.number.isRequired,
        close: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default PaginationButtons;
