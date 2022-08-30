import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App()
{
  const ctx = useContext(AuthContext)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const loginHandler = (email, password) =>
  // {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('isLogged', '1')
  //   setIsLoggedIn(true);
  // };
  // useEffect(() =>
  // {
  //   const logInfo = localStorage.getItem('isLogged')
  //   if (logInfo === '1') { setIsLoggedIn(true) }
  // }, [])
  // const logoutHandler = () =>
  // {
  //   localStorage.removeItem('isLogged')
  //   setIsLoggedIn(false);
  // };

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
