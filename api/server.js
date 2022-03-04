const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const usersAuthRouter = require("./users/users-authrouter");
const plantsRouter = require("./plants/plants-router");

const server = express();
server.use(express.json());
server.use(express.static(path.join(__dirname, "../client/build")));
server.use(helmet());
server.use(cors());

server.use("/api/users/auth", usersAuthRouter);
server.use("/api/plants", plantsRouter);

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    custom: "something went wrong",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
