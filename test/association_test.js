const mongoose = require('mongoose')
const User = require('../src/user')
const Comment = require('../src/comment')
const BlogPost = require('../src/blogPost')

describe('Association', () => {
  let joe, blogPost, comment
  beforeEach((done) => {
    joe = new User({ name: 'Joe' })
    blogPost = new BlogPost({ title: 'JS is Great', content: 'Yep it really is' })
    comment = new Comment({ content: 'Congrats on great post' })

    joe.blogPosts.push(blogPost)
    blogPost.comments.push(comment)
    comment.user = joe

    Promise.all([
      joe.save(),
      blogPost.save(),
      comment.save()
    ])
      .then(() => done())

  })

  it.only('save a relation between a user and blogpost', (done) => {
    User.findOne({ name: 'Joe' })
      .then((user) => {
        console.log(user)
        done()
      })
  })
})
