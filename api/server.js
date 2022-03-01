const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const usersAuthRouter = require("./users/users-authrouter");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/users/auth", usersAuthRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    custom: "something went wrong",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
