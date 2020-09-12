var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const Tag = require('./models/Tag');
const Link = require('./models/Link');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/tags', async (req, res) => {
  const tags = await Tag.find();
  res.send(tags.map(({tag}) => tag));
});

app.get('/tags/:tagId', async (req, res) => {
  const { tagId } = req.params;
  const links = await Link.find(
    {
      tags: {
        "$regex": tagId,
        "$options": "i",
      },
    },
  );
  res.send(links);
});

module.exports = app;
