// == [ CONFIG ] ===============================================
require('dotenv').config();
const app = require('express')();
const { MongoClient } = require('mongodb');

app.use(require('cors')({ origin: 'http://localhost:5173' }));

// == [ ROUTES ] ===============================================
app.get('/api/projects', async (_req, res) => {
    try {
        const client = await MongoClient.connect(process.env.MONGO_URI); 

        const projects = await client.db()      // default db from URI
            .collection('projects')             // target collection
            .find()                             // fetch all docs
            .toArray();                         
        res.json(projects);
    } catch {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

// == [ SERVER ] ===============================================
app.listen(process.env.PORT, () => console.log('Server running...'));

