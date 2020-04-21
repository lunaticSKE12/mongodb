const mongoogse = require('mongoose')
const Schema = mongoogse.Schema

const BlogPostSchena = new Schema({
  title: String,
  content: String,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment'
  }]
})

const BlogPost = mongoogse.model('blogPost', BlogPostSchena)

module.exports = BlogPost