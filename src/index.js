import TestComponent from './testComponent'

class App extends React.Component {
  render () {
    return <TestComponent />
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
