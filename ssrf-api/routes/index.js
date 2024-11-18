const express = require("express");
const router = express.Router();

const { getRoot } = require("../controllers/index");
const { fetchRemoteUrl } = require("../controllers/ssrf");


//Get Root

/**
 * @swagger
 * tags:
 *   name: Root
 *   description: the Root
 * /:
 *   get:
 *     summary: Return the Root Message
 *     tags: [Root]
 *     responses:
 *       200:
 *         description: Root Message
 */

router.get("/", getRoot)

/**
 * @swagger
 * tags:
 *   name: fetch url
 *   description: fetch url
 * /v1/ssrf:
 *   post:
 *     summary: fetch url
 *     tags: [fetch url]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - url
 *             properties:
 *               url:
 *                 type: string
 *                 format: string
 *                 description: url
 *       200:
 *         description: successfully
 *       400:
 *         description: Bad Request - Missing or invalid input
 */

router.post("/v1/ssrf", fetchRemoteUrl)




module.exports = router;