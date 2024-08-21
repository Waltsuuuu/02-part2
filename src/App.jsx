import PropTypes from 'prop-types';

const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}

App.propTypes = {
  counter: PropTypes.number
}

export default App