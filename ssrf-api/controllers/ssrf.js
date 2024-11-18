//Imports
// Server Imports
const axios = require('axios');

const fetchRemoteUrl = async (req, res) => {
  if (!req.body || !req.body.url) {
    return res.status(400).json({ error: "Missing URL in the request body." });
  }

  const { url } = req.body;

  try {
    const response = await axios.get(url); // Perform the HTTP GET request
    const data = response.data; // Access the response data

    return res.status(200).json({ data });

  } catch (error) {
    // Check if the error is due to Aikido's SSRF protection
    if (error.message && error.message.includes('Zen has blocked a server-side request forgery')) {
      console.error('Blocked by Aikido Security:', error);
      return res.status(403).json({ error: "Blocked by Security." });
    }

    if (error.message && error.message.includes('Invalid URL')) {
      console.error('Invalid URL:', error);
      return res.status(400).json({ error: "Bd/Invalid Url." });
    }

    // Log and return a 500 error for all other errors
    console.error(error);
    return res.status(500).json({ error: "Error" });
  }
};

module.exports = { fetchRemoteUrl }