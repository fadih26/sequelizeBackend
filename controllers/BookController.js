import db from '../models/index.js';

const { BookModel, AuthorModel, CategoryModel } = db;

// Function to add a new BookModel
export const addBook =async(req, res) =>{
    try {
        const { title, authorId, categoryIds,description } = req.body;
        const newBook = await BookModel.create({ 
            title,
            description,
            authorId, 
         
        });
        if (categoryIds && categoryIds.length) {
            await newBook.addCategories(categoryIds);
        }
        res.status(201).json({"message":"Book added successfully","data":newBook});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Function to fetch all books with their authors and categories
export const fetchBooks =async(req, res) =>{
    try {
        const books = await BookModel.findAll({
            include: [AuthorModel, CategoryModel]
        });
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const addCategory =async(req, res) =>{
    try {
        const { name} = req.body;
        const newCategory = await CategoryModel.create({ 
            name
         
        });
   
        res.status(201).json({"message":"Category added successfully","data":newCategory});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export const deleteCategory =async(req, res) =>{
    const { id } = req.params;

    try {
        const category = await CategoryModel.findByPk(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        await category.destroy();
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



export const addAuthor =async(req, res) =>{
    try {
        const { name} = req.body;
        const newAuthor = await AuthorModel.create({ 
            name
         
        });
   
        res.status(201).json({"message":"Author added successfully","data":newAuthor});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const deleteAuthor = async (req, res) => {
    const { id } = req.params;

    try {
        const author = await AuthorModel.findByPk(id);
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }

        await author.destroy();
        res.status(200).json({ message: 'Author deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await BookModel.findByPk(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        await book.destroy();
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



