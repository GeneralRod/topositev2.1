import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f0f0f0', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#333' }}>Test App - GitHub Pages</h1>
      <p>Als je dit ziet, werkt de basis React app!</p>
      <div style={{ 
        backgroundColor: '#4CAF50', 
        color: 'white', 
        padding: '10px', 
        borderRadius: '5px',
        marginTop: '20px'
      }}>
        ✅ React is geladen en werkt!
      </div>
    </div>
  );
};

export default App;
