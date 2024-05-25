// In your Express app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send('Hello, world!'); // Send a response to the client
})


// API endpoint to save polizaPlanMascota data
app.post('/api/save-poliza', (req, res) => {
  try {
    const polizaData = req.body.contenido[0]; // Extract the data from the request body

    // Save polizaData to your database (e.g., MySQL, MongoDB)
    // Example: Insert into a MySQL table
    // db.query('INSERT INTO poliza_table SET ?', polizaData, (err, result) => {
    //   if (err) {
    //     console.error('Error saving data:', err);
    //     res.status(500).json({ error: 'Error saving data' });
    //   } else {
    //     res.status(200).json({ message: 'Data saved successfully' });
    //   }
    // });

    // Replace the above example with your actual database logic
    // ...

  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

