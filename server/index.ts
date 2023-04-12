import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

app.use(cors());


app.get('/premierleague', async (req, res) => {
    try {
        const response = await axios.get('https://api.football-data.org/v4/competitions/PL/standings', {
            headers: {
                'X-Auth-Token': process.env.API_TOKEN
            }
        });
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Interval Server Error')
    }
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
