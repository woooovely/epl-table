import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

app.use(cors());


app.get('/premierleague', async (req, res) => {
    try {
        const response = await axios.get('https://api.football-data.org/v4/competitions/PL/standings', {
            headers: {
                'X-Auth-Token': 'e626339ce3c945e68bc7e7691ac3b077'
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
