import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.post('/api/check_breach', async (req, res) => {
  const { email } = req.body;

  try {
    const response = await axios.get(
      `https://haveibeenpwned.com/api/v3/breachedaccount/${email}`,
      {
        headers: {
          'hibp-api-key': process.env.API_KEY,
          'user-agent': 'PulseApp',
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    if (error.response?.status === 404) {
      res.json([]); // No breaches found
    } else {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;