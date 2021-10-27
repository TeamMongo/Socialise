import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from 'react-google-login';

function App() {
  return (
    <div className="App">
       <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={res=>console.log(res)}
        onFailure={console.log}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
