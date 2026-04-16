import React from 'react';

function App() {
  return (
    <div style={{
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '300',
        color: '#444',
        marginBottom: '10px'
      }}>
        Aurevia
      </h1>
      <p style={{
        fontSize: '1.1rem',
        color: '#666',
        maxWidth: '600px'
      }}>
        Foundation setup complete. Welcome to your local-first productivity workspace.
      </p>
      <div style={{
        marginTop: '20px',
        padding: '10px 20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        color: '#888',
        fontSize: '0.9rem',
        backgroundColor: '#fff'
      }}>
        Phase 1: Minimal Working Foundation
      </div>
    </div>
  );
}

export default App;
