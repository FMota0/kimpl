var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var app = express();

const { body, validationResult } = require('express-validator');

const { getId } = require('./utils');
const Tag = require('./models/Tag');
const Link = require('./models/Link');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
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

const judges = [
  'Codeforces',
  'AtCoder',
  'URI',
  'CodeChef',
];

app.post('/links', [
  body('desc').trim().notEmpty().isLength({ min: 1, max: 500 }),
  body('difficulty').isInt({ min: 1, max: 10 }),
  body('judge').trim().isIn(judges),
  body('link').trim().notEmpty().isURL(),
  body('owner').trim().notEmpty().isLength({ min: 4, max: 20 }),
  body('tags').isArray({ min: 1, max: 10 }).custom(values => {
    values.forEach(value => {
      if (typeof value !== 'string') {
        throw new Error('Incorrect type for tag');
      }
    });
    return true;
  })
], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    desc,
    difficulty,
    judge,
    link,
    owner,
    tags,
  } = req.body;

  const newLink = new Link({
    desc,
    difficulty,
    id: getId(),
    judge,
    likes: 0,
    link,
    owner,
    tags,
  });

  const result = await newLink.save();

  await Promise.all(tags.map(async tag => {
    if ((await Tag.count({ tag })) == 0) {
      const newTag = new Tag({ tag });
      await newTag.save();
    }
  }));

  res.send(result);
});

module.exports = app;
