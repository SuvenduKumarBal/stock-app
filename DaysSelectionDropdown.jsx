import PropTypes from 'prop-types';

const DaysSelectionDropdown = ({ selectedDays, handleChangeDays }) => {
  return (
    <select id='dropdown2' value={selectedDays} onChange={handleChangeDays}>
      {[3, 5, 10].map((days) => (
        <option id='dropdown-content2' key={days} value={days}>
          {days} Days
        </option>
      ))}
    </select>
  );
};

DaysSelectionDropdown.propTypes = {
  selectedDays: PropTypes.number.isRequired,
  handleChangeDays: PropTypes.func.isRequired,
};

export default DaysSelectionDropdown;
