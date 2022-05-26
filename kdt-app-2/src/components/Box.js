const Box = () => {
  console.log('Render Box Component');
  const style = {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  };
  return (
    <div>
      <div style={style} />
    </div>
  );
}

export default Box;