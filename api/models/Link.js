const mongoose = require('mongoose');

const Link = mongoose.model('Link', {
  desc: String,
  difficulty: Number,
  id: String,
  judge: String,
  likes: Number,
  link: String,
  owner: String,
  tags: [String],
});

module.exports = Link;