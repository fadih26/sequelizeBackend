import express from 'express';
import {
    addBook,
    fetchBooks,
    deleteBook,
    addAuthor,
    deleteAuthor,
    addCategory,
    deleteCategory
} from '../controllers/BookController.js';

const router = express.Router();

router.post('/add', addBook);
router.post('/add-author', addAuthor);
router.post('/add-category', addCategory);
router.get('/all', fetchBooks);
router.delete('/book/:id', deleteBook);
router.delete('/author/:id', deleteAuthor);
router.delete('/category/:id', deleteCategory);

export default router;