const router = require("express").Router();
const User = require("../../models/User");

// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    // 200 status code means the request is successful
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
    }
    res.status(200).json(userData);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(500).json(err);
  }
});

// UPDATE a user
router.put("/:id", async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(404).res.json(err);
  }
});

// DELETE a user
router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(404).res.json(err);
  }
});

module.exports = router;
