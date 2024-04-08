import React, { useState } from 'react';
import './App.css';
import StockData from './components/StockData';
import StockSelectionDropdown from './components/StockSelectionDropdown';
import DaysSelectionDropdown from './components/DaysSelectionDropdown';
import StockTable from './components/StockTable';
import PaginationButtons from './components/PaginationButtons';
import PropTypes from 'prop-types';

const StockViewer = ({ data }) => {
  const [selectedStock, setSelectedStock] = useState(data[0].stockName);
  const [selectedDays, setSelectedDays] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangeStock = (e) => {
    setSelectedStock(e.target.value);
  };

  const handleChangeDays = (e) => {
    setSelectedDays(parseInt(e.target.value));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const stockData = data.find((stock) => stock.stockName === selectedStock);
  const startIndex = (currentPage - 1) * selectedDays;
  const endIndex = startIndex + selectedDays;
  const visibleData = stockData.info.slice(startIndex, endIndex);

  return (
    <div className="stockViewer">
      <div className="controls">
        <StockSelectionDropdown
          data={data}
          selectedStock={selectedStock}
          handleChangeStock={handleChangeStock}
        />
        <DaysSelectionDropdown
          selectedDays={selectedDays}
          handleChangeDays={handleChangeDays}
        />
      </div>
      <StockTable visibleData={visibleData} />
      <PaginationButtons
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        endIndex={endIndex}
        stockData={stockData}
      />
    </div>
  );
};


const App = () => {
  return <StockViewer data={StockData} />;
};
App.propTypes = {
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
};


export default App;
