// lib/getFact.js

const getFact = async () => {
    
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/facts', {
        headers: {
          'X-Api-Key':  process.env.REACT_APP_API_KEY,
        }
      });
      const data = await response.json();
      return data[0].fact;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };
  
  export default getFact;