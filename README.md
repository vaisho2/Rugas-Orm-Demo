# ShoppyGlobe E-commerce Application

## Overview

ShoppyGlobe is a full-stack e-commerce web application built using React, Redux, React Router, Node.js, Express, and MongoDB. Users can browse products, view details, add/remove products from the cart, and proceed to checkout with secure authentication.

## Features

## FrontEnd

1. Display a list of products fetched from backend API.

2. View detailed product information.

3. Add/remove products from the cart.

4. Modify product quantity in the cart.

5. Search functionality for filtering products.

6. Error handling for failed API requests.

7. Responsive UI with CSS styling.

8. React Router for navigation.

9. Redux for state management.

10. Performance optimization with lazy loading and code splitting.

## BackEnd

1. Node.js & Express API for managing products, cart operations, and user authentication.

2. MongoDB integration for storing product and cart data.

3. User authentication & authorization using JWT.

4. API error handling & validation for secure transactions.

5. Testing with ThunderClient for verifying API responses.

6. CRUD operations for product and cart management.

## Technologies Used

## FrontEnd

#### React

#### Redux Toolkit

#### React Router

#### JavaScript (ES6+)

#### CSS

## BackEnd

#### Node.js

#### Express.js

#### MongoDB (Mongoose ORM)

#### JWT Authentication

#### ThunderClient (API testing)

## Folder Structure

ShoppeGlobe/
│── backend/
│   ├── controllers/
│   │   ├── cartController.js
│   │   ├── cartController.js
│   │   ├── productController.js
│   ├── models/
│   │   ├── cartModel.js
│   │   ├── productModel.js
│   │   ├── userModel.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   ├── routes/
│   │   ├── cartRoutes.js
│   │   ├── productRoutes.js
│   │   ├── userRoutes.js
│   ├── server.js
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Cart.jsx
│   │   │   ├── CartItem.jsx
│   │   │   ├── CheckOut.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── ProductItem.jsx
│   │   │   ├── ProductList.
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   ├── hooks/
│   │   │   ├── useFetchProducts.js
│   │   ├── utils/
│   │   │   ├── cartSlice.js
│   │   │   ├── store.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── App.css
│── public/
│── package.json
│── README.md

### Installation

1. Clone the repository:

git clone https://github.com/vaisho2/ShoppyGlobe-E-Commerce-Application.git

2. Navigate to the project folder:

cd ShoppeGlobe

3. Install dependencies:

npm install

4. Initialize a new Node.js project:

npm init

5. Install Vite as a development dependency:

npm install -D vite

6. Install React, React DOM, React icons, Redux Tookit and React-Redux as dependencies:

npm install react 

npm install react-dom 

npm install @reduxjs/toolkit react-redux

npm install react-icons --save

7. Navigate to BackEnd folder & install dependencies: 

npm install

npm init

npm install express cors dotenv mongoose bcryptjs jsonwebtoken express-

npm install --save-dev nodemon

8. Run the project:

npx vite (in ShoppeGlobe)
npm start (in backend)

### API Endpoint

#### User Authentication

POST /api/users/register - Register a new user.

POST /api/users/login - Login and receive JWT token.

#### Products Operations

GET /api/products - Get all products.

GET /api/products/:id - Get a single product by ID.

POST /api/products/products - Adds product to product list.

PUT /api/products/products/:id - Updates product.

DELETE /api/products/products/:id - Remove product from product list.

#### Cart Operations

GET /api/cart/:userId - Fetch user's cart.

POST /api/cart/:userId - Add product to cart.

PUT /api/cart/:userId/:itemId - Update product quantity.

DELETE /api/cart/:userId/:itemId - Remove product from cart.

### Redux Store Setup

cartSlice.js: Manages cart state (add, remove, increment, decrement items).

store.js: Configures Redux store.

### Performance Optimization

Lazy Loading: Implemented using React.lazy and Suspense.

Redux for State Management: Efficient handling of cart operations.

Error Handling: Graceful handling of failed API requests.

#### GitHub Repository:

https://github.com/vaisho2/ShoppyGlobe-E-Commerce-Application.git

#### Note:

Node modules are not included because of file size limitation.