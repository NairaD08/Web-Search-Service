# Web-Search-Service

## Description

The **Web Search Service** is a web application designed to help users discover and save books effortlessly. With a user-friendly interface, users can search for books, create accounts, and manage their saved books. The application integrates with the Google Books API to provide detailed information about each book, including titles, authors, descriptions, and cover images.

## Features

- **User Authentication**: Users can log in or sign up to create an account.
- **Book Search**: Search for books using an intuitive input field.
- **Search Results**: View search results with book titles, authors, descriptions, images, and links to the Google Books site.
- **Save Books**: Logged-in users can save books to their account for easy access later.
- **View Saved Books**: Users can view all saved books, complete with details and options to remove them.
- **Logout**: Users can log out, returning to the initial menu.

## User Flow

1. **Loading the Search Engine**: Upon loading the application, users are presented with a menu featuring options to **Search for Books** and **Login/Signup**, along with an input field and a submit button for book searches.

2. **Searching for Books**:

   - Clicking on the **Search for Books** menu option reveals an input field and a submit button.
   - If the user is not logged in and enters a search term, they will see several search results, each displaying the book’s title, author, description, image, and a link to the Google Books site.

3. **Login/Signup Modal**:

   - Clicking on the **Login/Signup** menu option opens a modal with a toggle for logging in or signing up.
   - **Signup**: Users can enter a username, email address, and password to create an account.
   - **Login**: Users can enter their email address and password to log in.

4. **Account Creation and Login**:

   - Upon successful signup, the user is logged in automatically.
   - After logging in, the modal closes, and the user is granted access to additional features.

5. **Logged-in Features**:

   - The menu options change to include **Search for Books**, **My Saved Books**, and **Logout**.
   - Users can search for books and save them to their account.
   - Saved books can be viewed, with options to remove them from the account.

6. **Logout**:
   - Clicking the **Logout** button logs the user out and returns them to the initial menu.

## Technologies Used

- **HTML5**: Structure of the web application.
- **CSS3**: Styling for a modern and responsive user interface.
- **JavaScript**: Functionality for searching, managing user accounts, and interacting with the Google Books API.
- **React**: Front-end framework for building the user interface.
- **Node.js and Express.js**: Server-side framework for handling requests and user authentication.
- **MongoDB**: Database for storing user accounts and saved books.

## Installation

To run the Book Search Engine locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/NairaD08/web-search-service.git
   cd book-search-engine
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Acknowledgments

- Google Books API for providing book data.
- React and Node.js for the development framework.
