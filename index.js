const express = require('express');
const app = express();
require('./services/passport');

// немедленно вызываем authRoutes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
