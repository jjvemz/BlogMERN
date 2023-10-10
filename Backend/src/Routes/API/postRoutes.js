import express from "express";
import {
    getAllPost,
    addPost,
    updatePost,
    getPostById,
    deletePost,
    getUserById,
} from "../src/Controllers/blog-controller.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllPost);
blogRouter.post("/add", addPost);
blogRouter.put("/update/:id", updatePost);
blogRouter.get("/:id", getPostById);
blogRouter.delete("/:id", deletePost);
blogRouter.get("/user/:id", getUserById);

export default postRouter;