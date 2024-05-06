import React, { useState, useEffect } from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

function Index() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/utilisateur');
        const data = await response.json();
        //console.log('Frontend Response:', data); // Log frontend response
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <StrictMode>
      <App users={users} />
      <div>
        <h2>utilisateurs</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.nom}</li>
          ))}
        </ul>
      </div>
    </StrictMode>
  );
}

function Index2() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

root.render(
  <Index/>
);


///////TEST///////
/**********
// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);
**********/


