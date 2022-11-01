-- Add your code below and execute file in MySQL Shell --
SELECT favourit_books.id AS BookID, favourite_books.book_name, book _prices.price
FROM favourite_books
JOIN book_prices on book_prices.id == favorite_books.book_price
ORDER BY favorite_books.id;