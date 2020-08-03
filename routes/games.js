const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/Users");
const Game = require("../models/Games");

// @route       GET api/Games
// @desc        Get all games
// @access      Public
router.get("/", auth, async (req, res) => {
  try {
    const games = await Game.find({}).sort({
      date: -1,
    });
    res.json(games);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       POST api/games
// @desc        Add new game
// @access      Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required").not().isEmpty(),
      check("image", "Please add an Image Url of the game's cover art!")
        .not()
        .isEmpty(),
      check("rating", "Please add a rating out of One through Five")
        .not()
        .isEmpty(),
      check(
        "description",
        "Please add a description of the game of atleast 140 characters."
      )
        .not()
        .isEmpty()
        .isLength({ min: 5 }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, image, description, rating, platform } = req.body;

    try {
      const newGame = new Game({
        name,
        image,
        description,
        rating,
        platform,
        user: req.user.id,
      });

      const game = await newGame.save();

      res.json(game);
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Sever Error");
    }
  }
);

// @route       PUT api/contacts/:id
// @desc        Update contact
// @access      Private
router.put("/:id", auth, async (req, res) => {
  const { name, image, description, rating, platform } = req.body;

  //Build Contact object
  const gameFields = {};
  if (name) gameFields.name = name;
  if (image) gameFields.image = image;
  if (rating) gameFields.rating = rating;
  if (platform) gameFields.platform = platform;
  if (description) gameFields.description = description;

  console.log(name, image, description, rating, platform);

  try {
    let game = await Game.findById(req.params.id);

    if (!game) return res.status(404).json({ msg: "Game not fount" });

    //Make sure user owns contact
    if (game.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    contact = await Game.findByIdAndUpdate(
      req.params.id,
      { $set: gameFields },
      { new: true }
    );

    res.json(gameFields);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Sever Error");
  }
});

// @route       DELETE api/contacts
// @desc        Delete contact
// @access      Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let game = await Game.findById(req.params.id);

    if (!game) return res.status(404).json({ msg: "Game not fount" });

    //Make sure user owns contact
    if (game.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Game.findByIdAndRemove(req.params.id);

    res.json({ msg: "Game Removed" });
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Sever Error");
  }
});

module.exports = router;
