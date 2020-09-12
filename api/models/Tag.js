const mongoose = require('mongoose');

const Tag = mongoose.model('Tag', {
  tag: {
    type: String,
    unique: true,
    index: true,
  },
});

module.exports = Tag;