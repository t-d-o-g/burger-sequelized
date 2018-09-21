const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const burgerRouter = require('./routes/burger');

const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./models');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', burgerRouter);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.log(`Express server listening on port ${PORT}`);
    /* eslint-enable no-console */
  });
});
