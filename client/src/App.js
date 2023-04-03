import { useState, useEffect } from 'react';


function User({shortName, url}) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function load() {
      const response = await fetch(url);
      const usersData = await response.json();
      setUserInfo(usersData);
    }

    load();
  }, [url]);

  return (<div>
    <h1>{shortName}</h1>
    <div>{userInfo && JSON.stringify(userInfo)}</div>   
  </div>);
}


function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function load() {
      const response = await fetch('/api/users');
      const usersData = await response.json();
      setUsers(usersData);
    }

    load();
  }, []);


  return (
    <div>
      <h1>Fake users</h1>
      {
        users && users.map(user => <User shortName={user.shortName} url={user.url} />)
      }
    </div>
  );
}

export default App;
