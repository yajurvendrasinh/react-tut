const Colorpaltte = ({ chooseColor, chosenColor }) => {
  const colors = ['red', 'green', 'blue'];
  const colorDiv = colors.map((color) => {
    return (
      <div
        onClick={() => {
          chooseColor(color);
        }}
        key={color}
        className={`${color} color-block ${
          color === chosenColor ? 'active' : ''
        }`}
      ></div>
    );
  });

  return <div className='palatte'>{colorDiv}</div>;
};

export default Colorpaltte;
