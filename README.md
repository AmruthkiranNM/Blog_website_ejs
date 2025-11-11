📝 Blog Capstone Project

A simple Blog Web Application built using Node.js, Express.js, and EJS.
This project allows users to create, view, edit, and delete blog posts — stored temporarily in memory (no database yet).
It focuses on clean design, dynamic rendering, and responsive styling.

🚀 Features

✅ Create Posts — Add new blog posts using a simple form.
✅ View Posts — See all your posts listed on the homepage.
✅ Edit Posts — Update existing posts easily.
✅ Delete Posts — Remove posts you no longer need.
✅ Responsive Styling — Works smoothly on desktop and mobile.
✅ Templating with EJS — Dynamic rendering with reusable components (header/footer).

🧠 Tech Stack
Technology	Purpose
Node.js	Server-side runtime
Express.js	Web framework for routing and middleware
EJS	Templating engine for dynamic pages
Body-Parser	Middleware for handling form submissions
CSS (Custom)	Styling and layout

📁 Folder Structure
blog-capstone/
 ┣ public/
 ┃ ┗ styles.css
 ┣ views/
 ┃ ┣ home.ejs
 ┃ ┣ compose.ejs
 ┃ ┣ edit.ejs
 ┃ ┗ partials/
 ┃   ┣ header.ejs
 ┃   ┗ footer.ejs
 ┣ app.js
 ┣ package.json
 ┗ README.md

⚙️ Setup & Installation
Clone this repository
git clone https://github.com/AmruthkiranNM/blog-capstone.git
cd blog-capstone


Install dependencies
npm init -y
npm install ejs express body-parser

Run the app
nodemon app.js

Open in your browser
http://localhost:3000

🧩 App Overview
🏠 Home Page (/)

Displays all posts.
If no posts exist yet, a message invites users to create one.

📝 Compose Page (/compose)

Form for adding a new post (title + content).
After submitting, you’re redirected back to the homepage.

✏️ Edit Page (/edit/:id)

Edit an existing post and save updates.

❌ Delete

Removes the selected post from the list.

🎨 Styling

The app uses a custom CSS stylesheet located in:
/public/styles.css

You can easily enhance it using:
Bootstrap
Flexbox/Grid
Custom fonts or themes

📦 Dependencies

Installed via npm install:
"dependencies": {
  "body-parser": "^1.20.3",
  "ejs": "^3.1.10",
  "express": "^4.21.1"
}

🧰 Future Improvements

🔹 Connect to a real database (MongoDB using Mongoose).
🔹 Add user authentication (login/signup).
🔹 Implement search functionality for posts.
🔹 Add image uploads and rich text editor.
🔹 Deploy online using Render, Vercel, or Railway.

👨‍💻 Author

    Amruth kiran N M
💼 Web Developer | 
📧 amruthnek@gmail.com

⚖️ License

This project is licensed under the MIT License — free to use, modify, and distribute.

© 2025 BlogCapstone | Made with ❤️ using Node.js & EJS
