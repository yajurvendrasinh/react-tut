const CustomButton = ({ type = 'button', value, handleClick }) => {
  return (
    <button type={type} onClick={handleClick}>
      {value}
    </button>
  );
};

export default CustomButton;
