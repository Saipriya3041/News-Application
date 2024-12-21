const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Serve static files (like images, stylesheets, JavaScript) from a 'public' folder
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Daily News</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            color: white;
            background-color: #1c1c1c;
          }
          /* Hero Section */
          .hero {
            height: 100vh;
            background-image: url('https://source.unsplash.com/1600x900/?news,city');
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
          }
          .hero h1 {
            font-size: 3em;
            margin-bottom: 20px;
          }
          .hero p {
            font-size: 1.5em;
            margin-bottom: 40px;
          }
          .hero button {
            padding: 15px 30px;
            font-size: 1.1em;
            background-color: #ff6347;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .hero button:hover {
            background-color: #ff4500;
          }

          /* Sticky Navigation */
          nav {
            position: sticky;
            top: 0;
            background-color: rgba(0, 0, 0, 0.8);
            padding: 15px;
            text-align: center;
          }
          nav a {
            color: white;
            margin: 0 20px;
            text-decoration: none;
            font-size: 1.2em;
          }
          nav a:hover {
            color: #ff6347;
          }

          /* News Grid Layout */
          .news-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin: 40px 5%;
            padding: 0 5%;
          }
          .news-item {
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
          }
          .news-item:hover {
            transform: translateY(-10px);
          }
          .news-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }
          .news-item h3 {
            padding: 15px;
            margin: 0;
            font-size: 1.5em;
          }
          .news-item p {
            padding: 0 15px 15px;
            font-size: 1em;
            color: #333;
          }

          /* Footer */
          .footer {
            text-align: center;
            padding: 20px;
            background-color: rgba(222, 149, 149, 0.9);
            color: white;
            position: relative;
          }
        </style>
      </head>
      <body>

        <!-- Sticky Navigation Bar -->
        <nav>
          <a href="#home">Home</a>
          <a href="#world">World</a>
          <a href="#tech">Tech</a>
          <a href="#sports">Sports</a>
        </nav>

        <!-- Hero Section -->
        <div class="hero">
          <h1>Welcome to the Daily News</h1>
          <p>Stay updated with the latest headlines and breaking news.</p>
          <button>Explore Latest Stories</button>
        </div>

        <!-- News Container -->
        <div class="news-container">
          <!-- First News Item: Global Economy -->
          <div class="news-item">
            <img src="C:\Users\Hi\Desktop\News application\world-economic-outlook-october-2024-hero-image.jpg" alt="Global Economy">
            <div class="news-content">
              <h3>Global Economy: 2024 Outlook</h3>
              <p>The global economy is projected to slow down, with challenges for many markets in the upcoming year. Learn about the factors that will impact growth.</p>
            </div>
          </div>

          <!-- Second News Item: Tech Giants Under Scrutiny -->
          <div class="news-item">
            <img src="C:\Users\Hi\Desktop\News application\images.jpeg" alt="Tech News">
            <div class="news-content">
              <h3>Tech Giants Under Scrutiny</h3>
              <p>Regulatory bodies across the world are scrutinizing the power of tech giants. Explore the latest developments in tech legislation and antitrust laws.</p>
            </div>
          </div>

          <!-- Third News Item: Innovations in Renewable Energy -->
          <div class="news-item">
            <img src="C:\Users\Hi\Desktop\News application\download.jpeg" alt="Renewable Energy">
            <div class="news-content">
              <h3>Innovations in Renewable Energy</h3>
              <p>New technological advances in solar and wind energy are paving the way for a more sustainable future. Find out how clean energy is changing the world.</p>
            </div>
          </div>

          <!-- Fourth News Item: NASA’s Mission to Mars -->
          <div class="news-item">
            <img src="C:\Users\Hi\Desktop\News application\download (1).jpeg" alt="NASA Mars Mission">
            <div class="news-content">
              <h3>NASA’s Mission to Mars</h3>
              <p>Nasa is preparing to launch its next Mars rover in 2024. Discover what it will reveal about the planet's potential for human habitation.</p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>&copy; 2024 Daily News | All Rights Reserved</p>
        </div>

      </body>
    </html>
  `);
});

// Define POST route to handle form submissions (or any other data)
app.post('/submit', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  res.send('Data received');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server and log output to terminal
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


