const Post = require('../../models/post');


module.exports = {
  create,
  getAllPosts,
};

async function create(req, res) {
  const post = await Post.create(req.body)
  res.json(post)
}

async function getAllPosts(req, res) {
  const posts = await Post.find({})
  res.json(posts)
}

