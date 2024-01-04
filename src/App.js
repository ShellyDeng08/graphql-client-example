import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from '@apollo/client'
import apolloClient from './apollo/client'
import UserInfo from './userInfo'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <UserInfo />
      </div>
    </ApolloProvider>
    
  );
}

export default App;
