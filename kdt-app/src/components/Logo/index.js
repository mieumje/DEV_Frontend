import logo from './logo.svg';

function Logo(props) {
  return <img src={logo} className="App-logo" alt="logo" style={{ width: props.size, height: props.height}}/>
}

Logo.defaultProps = {
  size: 200,
}

export default Logo;