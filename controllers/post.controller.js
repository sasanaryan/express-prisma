const { PrismaClient } = require("@prisma/client");

const postClient = new PrismaClient().post;

// getAllPosts
const getAllPosts = async (req, res) => {
  try {
    const allPosts = await postClient.findMany();

    res.status(200).json({ data: allPosts });
  } catch (e) {
    console.log(e);
  }
};

// getPostById
const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await postClient.findUnique({
      where: {
        id: postId,
      },
    });

    res.status(200).json({ data: post });
  } catch (e) {
    console.log(e);
  }
};

// createPost
const createPost = async (req, res) => {
  try {
    const postData = req.body;

    const post = await postClient.create({ data: postData });

    res.status(201).json({ data: post });
  } catch (e) {
    console.log(e);
  }
};

// editPost
const editPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = req.body;

    const post = await postClient.update({
      where: {
        id: postId,
      },
      data: postData,
    });

    res.status(200).json({ data: post });
  } catch (e) {
    console.log(e);
  }
};

// deletePost
const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await postClient.delete({
      where: {
        id: postId,
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  editPost,
  deletePost,
};
