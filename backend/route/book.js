const express = require('express');
const router = express.Router();
const Book = require('../model/Books');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'niti$hisagoodboy';



// 1.   Add books
router.post('/addBook', async (req, res) => {
    // let book = new Book({
    //     name: req.body.name,
    //     email: req.body.email,
    //     contact: req.body.contact,
    //     book_name: req.body.book_name,
    //     author: req.body.author,
    //     format: req.body.format,
    //     availability: req.body.availability,
    //     rating: req.body.rating
    // })
    // await book.save();
    let record = await Book.findOneAndUpdate({ name: req.body.name}, { $addToSet: { book: req.body.book_name,  author: req.body.author }})

    res.status(200).json({ record });
})


// 2. Fetch all books
router.post('/fetchAllBooks', async (req, res) => {
    let book = await Book.findOne({name: req.body.name});

    res.status(200).json({book})
})


// 3. Delete a book
router.post('/deleteBook', async (req, res) => {
    let book = await Book.update({$pullAll: {book: [req.book_name]}});

    let record = await user.save();
    res.status(200).json({ record });
})



module.exports = router