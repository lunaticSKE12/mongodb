const mongoose = require('mongoose')
require('dotenv').config();

mongoose.Promise = global.Promise

before((done) => {
  const uri = process.env.ATLAS_URI;
  mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  );
  const connection = mongoose.connection;
  connection.once('open', () => { done() })
    .on('error', (error) => {
      console.warn('Warning', error)
    })
})

beforeEach((done) => {
  const { users, comments, blogposts } = mongoose.connection.collections
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        done()
      })
    })
  })
})