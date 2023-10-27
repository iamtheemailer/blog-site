const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('public')); // static files from the public folder

app.set('view engine', 'ejs'); // Set EJS as  view engine
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  
  const blogPosts = [
    {
      id: 1,
      title: 'My First Blog Post',
      author: 'KEERTHISAN',
      date: 'October 1, 2023',
      content: 'This is the content of my first blog post...',
    },
    
  ];

  res.render('home', { blogPosts }); 
});
app.get('/post', (req, res) => {
  res.render('post');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
