function ColorQueue({ color, selectSwatch }) {
  // const selectSwatch = (e) => {
  //   console.log(e.target.getAttribute('key'));
  // };

  // const colorBlocks = colors.map((color) => {
  return (
    <div
      key={color}
      value={color}
      className={`${color} color-block`}
      onClick={selectSwatch}
    ></div>
  );
  // });

  // return (
  //   <div className='container' queueId={id}>
  //     {colorBlocks}
  //   </div>
  // );
}

export default ColorQueue;
