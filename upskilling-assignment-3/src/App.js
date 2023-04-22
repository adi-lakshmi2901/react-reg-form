import './App.css';
import LoginPage from './LoginPage';
import RegisterForm from './RegisterForm';


function App() {
  const func = (usrNames,pwds) => {
   <LoginPage usersData={usrNames} pwdData={pwds}/> 
            }
  return (
    <div className="App">
      <RegisterForm sendData={func}/>
    </div>
  );
}

export default App;
