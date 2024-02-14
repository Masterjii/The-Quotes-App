const express = require("express");
const Quotes = require("../models/Quote");
const router = express.Router();

router.get("/allquotes", async (req, res) => {
  try {
    let allQuotes = await Quotes.find({});
    res.status(200).json(allQuotes);
  } catch (e) {
    res.status(400).json({ msg: "Something went wrong in allquotes" });
  }
});

router.post("/addquotes", async (req, res) => {
  try {
    let { author, text } = req.body;
    let newQuote = await Quotes.create({ author, text });
    console.log(newQuote, "newQuote");
    res.status(201).json({ msg: "New Quote created Successfully" });
  } catch (e) {
    res.status(400).json({ msg: "Something went wrong in addQuote" });
  }
});

router.get("/quotes/:id", async (req, res) => {
  try {
    let quote = await Quotes.findById(req.params.id);
    res.status(200).json(quote);
  } catch (e) {
    res.status(400).json({ msg: "Something went wrong in 3rd route" });
  }
});

// Delete -
router.delete("/quotes/:id", async (req, res) => {
  const quoteId = req.params.id;
  try{
    await Quotes.findByIdAndDelete(quoteId);
    res.status(200).json({message: 'Quote deleted successfully'});
  }
  catch(error){
    res.status(400).json({ msg: "Something went wrong in delete quotes" });
  }
});

module.exports = router;
