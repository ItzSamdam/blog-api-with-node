const db = require("../models");

// create main model
const Post = db.posts;

// create post
const addPost = async (request, response) => {
    // validate requestuest
    if (!request.body.title) {
        response.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    // create a post
    let info = {
        title: request.body.title,
        summary: request.body.summary,
        category_id: request.body.category_id,
        description: request.body.description,
        published: request.body.published ? request.body.published : false,
    };

    // save Post in the database
    try {
        const post = await Post.create(info);
        response.status(200).send(post);
        console.log(post);
    } catch (err) {
        response.status(500).send({
            message: err.message || "Error occurred while creating the Post",
        });
    }
};

// get all posts
const getAllPosts = async (request, response) => {

    let posts = await Post.findAll({});
    response.status(200).send(posts);
    console.log(posts);
};

// get single posts
const getSinglePost = async (request, response) => {
    let id = request.params.id;
    let post = await Post.findOne({ where: { id: id } });
    response.status(200).send(post);
};

// update a post
const updatePost = async (request, response) => {
    let id = request.params.id;
    const post = await Post.update(request.body, { where: { id: id } });
    response.status(200).send('Post is Updated');
};

// delete a post
const deletePost = async (request, response) => {
    let id = request.params.id;
    await Post.destroy({ where: { id: id } });
    response.status(200).send("Post is deleted");
};

// get published post
const getPublishedPost = async (request, response) => {
    const posts = await Post.findAll({ where: { published: true } });
    response.status(200).send(posts);
};

module.exports = {
    addPost,
    getAllPosts,
    getPublishedPost,
    getSinglePost,
    updatePost,
    deletePost,
};