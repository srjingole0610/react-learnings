## **React Course Outline: Beginner to Advanced**

### **Module 1: Introduction to React**
- What is React?
- Why use React?
- Setting up the React environment (Node.js, npm, and create-react-app)
- React Components: Functional vs. Class Components
  
#### **Coding Questions:**
1. Create a simple React app that displays "Hello World".
2. Create a functional component that renders a welcome message.
3. Create a class component that displays your name.

#### **Basic Project:**
- **Static Portfolio Website:** Create a basic portfolio with sections like About Me, Projects, and Contact using JSX and components.

---

### **Module 2: React Components and Props**
- Understanding Props
- Passing Data Between Components
- Props Validation with PropTypes
  
#### **Coding Questions:**
1. Create a component that accepts your name as a prop and displays a greeting.
2. Build a parent component that passes an array of hobbies to a child component and displays them.
  
#### **Project:**
- **User Profile Card:** Build a component that takes user data (name, age, image, hobbies) as props and displays a user profile card.

---

### **Module 3: State and Event Handling**
- Understanding React State
- Managing State in Class and Functional Components
- Handling Events
- Two-Way Data Binding

#### **Coding Questions:**
1. Create a counter component with increment and decrement buttons.
2. Create a form with controlled components that captures user input and displays it on submission.

#### **Project:**
- **To-Do List App:** Build a simple to-do list where users can add tasks, mark them as completed, and delete tasks. Manage the state of tasks.

---

### **Module 4: React Lifecycle Methods & Hooks**
- **Component Lifecycle (Class Components)**
  - `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`
- **Introduction to React Hooks**
  - `useState`, `useEffect`, `useRef`
  
#### **Coding Questions:**
1. Create a component that fetches and displays data from an API when it mounts using `componentDidMount`.
2. Build a component that tracks window width using `useEffect` and updates on window resize.

#### **Project:**
- **Random Joke Generator:** Build an app that fetches and displays random jokes from an API. Use lifecycle methods or hooks to manage the API call.

---

### **Module 5: Conditional Rendering and Lists**
- **Conditional Rendering (if-else, ternary, &&)**
- **Rendering Lists**
- **Keys in Lists**

#### **Coding Questions:**
1. Create a component that displays different messages based on the user’s login status.
2. Create a component that renders a list of products using the `.map()` function.

#### **Project:**
- **Product Catalog:** Build a product catalog that displays a list of products, where each product has a name, price, and availability status.

---

### **Module 6: Forms and Validation**
- **Handling Forms in React**
- **Form Validation**
- **Controlled vs. Uncontrolled Components**

#### **Coding Questions:**
1. Create a registration form with inputs for name, email, and password. Use controlled components to manage form data.
2. Implement basic form validation for the registration form, ensuring required fields are filled out.

#### **Project:**
- **Registration Form:** Build a user registration form with validation (e.g., required fields, proper email format). On successful submission, display a success message.

---

### **Module 7: React Router**
- **Setting up React Router**
- **Navigating Between Pages**
- **Route Parameters and Query Strings**
- **Nested Routes**

#### **Coding Questions:**
1. Set up React Router to create navigation between three pages: Home, About, and Contact.
2. Create a dynamic route that takes a user ID as a parameter and displays the user's details on a separate page.

#### **Project:**
- **Multi-Page Blog:** Build a simple blog app with a homepage listing blog posts and a dynamic route to display individual posts.

---

### **Module 8: State Management with Context API and Redux**
- **React Context API**
- **Introduction to Redux**
- **Actions, Reducers, and Store**
- **Connecting Redux to React**

#### **Coding Questions:**
1. Use Context API to manage the theme (dark/light) across multiple components in the app.
2. Create a Redux store for managing the state of a counter with increment, decrement, and reset actions.

#### **Project:**
- **Shopping Cart:** Build a shopping cart where users can add items to the cart, remove them, and adjust item quantities. Manage the cart state using Redux.

---

### **Module 9: Side Effects and Custom Hooks**
- **Working with Side Effects (fetching data, timers, etc.)**
- **Creating Custom Hooks**

#### **Coding Questions:**
1. Create a custom hook to manage form input state.
2. Use a custom hook to fetch data from an API and display it in a component.

#### **Project:**
- **Weather App:** Build a weather app that fetches and displays current weather information for a selected city. Use a custom hook to handle the API request.

---

### **Module 10: Optimizing React Applications**
- **Memoization in React (React.memo, useMemo, useCallback)**
- **Code Splitting and Lazy Loading**
- **Optimizing Rendering with Pure Components**

#### **Coding Questions:**
1. Use `React.memo` to optimize a component that renders a list of users.
2. Implement lazy loading for a component that displays heavy content (e.g., images, large data).

#### **Project:**
- **Image Gallery:** Build an image gallery that lazily loads images as the user scrolls down. Use `React.memo` and `useCallback` to optimize performance.

---

### **Module 11: Testing in React**
- **Introduction to Testing with Jest**
- **Testing React Components with React Testing Library**
- **Writing Unit and Integration Tests**

#### **Coding Questions:**
1. Write a unit test for a component that displays a greeting message.
2. Write a test to simulate a button click in a counter component and verify the result.

#### **Project:**
- **Test Your To-Do List:** Write unit and integration tests for the To-Do List app created in Module 3.

---

### **Module 12: Deploying React Applications**
- **Preparing a React App for Production**
- **Deploying to GitHub Pages**
- **Deploying to Netlify/Heroku**

#### **Project:**
- **Deploy a React App:** Take one of the previously built projects (e.g., the weather app) and deploy it to Netlify or GitHub Pages.

---

### **Module 13: Advanced React Patterns**
- **Higher-Order Components (HOCs)**
- **Render Props**
- **Compound Components**
- **Portals**

#### **Coding Questions:**
1. Implement a Higher-Order Component (HOC) to add logging functionality to any component.
2. Use the Render Props pattern to share logic between two components that fetch data from different APIs.

#### **Project:**
- **HOC Authentication:** Build a simple app where users can log in. Use HOCs to manage access control (e.g., only logged-in users can access certain pages).

---

### **Capstone Project: Full-Stack React Application**
- Build a full-stack React application with user authentication, data fetching from an API, form handling, and state management. Some suggestions:
  - **Task Manager:** A task management system with user authentication, task assignment, and status tracking.
  - **E-Commerce Store:** A full e-commerce application with product listings, shopping cart, checkout, and order tracking.
  - **Blog Platform:** A blog platform with user authentication, article posting, commenting, and moderation
  - **Deliverables:**
  - A fully functional React application with a clean and responsive UI/UX.
  - A well-structured codebase with proper use of React hooks, components, and state management
  - A comprehensive testing suite with unit and integration tests.
  - A production-ready deployment to a cloud platform (e.g., Netlify, Heroku).





## **Module 1: Introduction to React**
### **Coding Questions:**
1. Create a React app that displays "Welcome to React".
2. Write a functional component that renders a heading and a paragraph.
3. Create a class component that displays your full name.
4. Write a React component that renders a list of your favorite books.
5. Create a component that renders a "Hello [Your Name]" message.

### **Basic Project Ideas:**
1. **Personal Portfolio:** Build a static portfolio website with an About Me, Projects, and Contact section.
2. **Favorite Movies App:** Create a simple app that displays a list of your favorite movies with images and descriptions.

---

## **Module 2: React Components and Props**
### **Coding Questions:**
1. Create a component that takes `name` as a prop and displays "Hello, [name]!".
2. Write a component that accepts an array of strings as a prop and renders them in a list.
3. Build a parent component that passes a message to a child component and renders it.
4. Write a component that renders an image and accepts `src`, `alt`, and `caption` as props.
5. Create a user profile component that takes `name`, `age`, and `location` as props and renders them.

### **Basic Project Ideas:**
1. **User Profile Card:** Build a user profile component that displays a person's photo, name, age, and location.
2. **Product Card:** Create a product card component that takes in product details as props (name, price, description) and renders it in a styled card format.

---

## **Module 3: State and Event Handling**
### **Coding Questions:**
1. Create a counter component with `+` and `-` buttons to increase and decrease the count.
2. Create a form that captures user input and displays it below the form after submission.
3. Build a button that toggles between showing and hiding a paragraph when clicked.
4. Write a component with two buttons: "Turn On" and "Turn Off". The component should display the current status based on which button was clicked.
5. Create a color-changing box that changes color every time it is clicked.

### **Basic Project Ideas:**
1. **To-Do List App:** Build a to-do list with the ability to add, edit, and delete tasks.
2. **Simple Quiz App:** Create a quiz with multiple-choice questions. Users should be able to select answers and see their score at the end.

---

## **Module 4: React Lifecycle Methods & Hooks**
### **Coding Questions:**
1. Create a component that fetches and displays data from an API using `componentDidMount`.
2. Use `useEffect` to log the window's width every time the window is resized.
3. Build a component that displays the current date and time, updating every second using `useEffect`.
4. Create a component that conditionally fetches data from an API when a button is clicked using `useState` and `useEffect`.
5. Use `useRef` to focus on an input field when the component mounts.

### **Basic Project Ideas:**
1. **Random Joke Generator:** Fetch random jokes from an API and display them on the screen.
2. **Simple Stopwatch:** Create a stopwatch that starts, stops, and resets using state and hooks.

---

## **Module 5: Conditional Rendering and Lists**
### **Coding Questions:**
1. Write a component that renders "Logged In" if the user is logged in and "Logged Out" if not, based on a prop.
2. Create a list of tasks from an array and display them in an unordered list.
3. Build a component that renders a different message based on the time of day (morning, afternoon, or evening).
4. Create a component that maps over an array of products and renders each product's name and price.
5. Write a component that conditionally shows a button if a prop `isAdmin` is true.

### **Basic Project Ideas:**
1. **Weather Display App:** Create an app that conditionally displays different weather icons (sunny, cloudy, rainy) based on a weather condition.
2. **Product List with Filters:** Display a list of products with the ability to filter by category or price.

---

## **Module 6: Forms and Validation**
### **Coding Questions:**
1. Build a form with fields for `name`, `email`, and `password`, and handle input changes with `useState`.
2. Add validation to a form that ensures all fields are filled before submission.
3. Write a form with controlled components that handles both `onSubmit` and `onChange` events.
4. Implement a form where the `Submit` button is disabled until all required fields are valid.
5. Create a form that displays an error message if an email is invalid or if the password is too short.

### **Basic Project Ideas:**
1. **User Registration Form:** Create a registration form with proper validation and error handling.
2. **Login Form with Validation:** Build a login form with email and password validation. Display error messages if the input is invalid.

---

## **Module 7: React Router**
### **Coding Questions:**
1. Set up routing for a basic app with Home, About, and Contact pages.
2. Create a route that accepts a dynamic `id` parameter and fetches user data based on that `id`.
3. Implement nested routes for a dashboard component with pages for "Profile" and "Settings".
4. Use React Router's `Link` component to navigate between pages.
5. Build a "Not Found" page that displays when no matching route is found.

### **Basic Project Ideas:**
1. **Multi-Page Blog:** Build a blog app with a homepage listing blog posts and a dynamic route to display individual posts.
2. **Recipe App:** Create a recipe app where users can navigate to specific recipe pages and see details about each recipe.

---

## **Module 8: State Management with Context API and Redux**
### **Coding Questions:**
1. Use the Context API to create a theme provider that manages light/dark themes.
2. Implement a Redux store to manage the state of a counter with increment and decrement actions.
3. Create a context for managing user authentication state in a React app.
4. Dispatch actions in Redux to add items to a shopping cart and display the updated cart.
5. Use the `useContext` hook to access and update global state across multiple components.

### **Basic Project Ideas:**
1. **Shopping Cart with Redux:** Build a shopping cart where users can add, remove, and update quantities of items. Manage state with Redux.
2. **Theme Switcher with Context API:** Create a theme switcher (light/dark) that applies to the entire app using the Context API.

---

## **Module 9: Side Effects and Custom Hooks**
### **Coding Questions:**
1. Create a custom hook `useWindowWidth` that tracks the window's width and returns it.
2. Write a custom hook that fetches data from an API and handles loading and error states.
3. Build a custom hook that manages form input and validation logic.
4. Use a side effect (`useEffect`) to fetch and display a random quote from an API on page load.
5. Implement a custom hook `useLocalStorage` to store and retrieve values from `localStorage`.

### **Basic Project Ideas:**
1. **Random Quote App:** Fetch random quotes from an API and display them with a "New Quote" button to fetch another one.
2. **News Feed App:** Create a simple news feed that fetches the latest articles from an API and displays them.

---

## **Module 10: Optimizing React Applications**
### **Coding Questions:**
1. Use `React.memo` to optimize a component that renders a large list of items.
2. Implement lazy loading for a component that renders images.
3. Use `useCallback` to prevent unnecessary re-renders in a component with expensive operations.
4. Apply `useMemo` to memoize the result of a complex calculation in a component.
5. Implement code splitting by lazily loading a component with `React.lazy()` and `Suspense`.

### **Basic Project Ideas:**
1. **Image Gallery with Lazy Loading:** Build an image gallery where images are lazily loaded as the user scrolls.
2. **Performance Optimized Product List:** Create a large product list that is optimized using memoization and lazy loading.

---

## **Module 11: Testing in React**
### **Coding Questions:**
1. Write a unit test for a component that renders a button and handles a click event.
2. Test a form component to ensure that validation errors appear when invalid input is submitted.
3. Write a snapshot test for a stateless functional component.
4. Simulate a button click in a test and assert that the counter value increases.
5. Test a component that fetches data from an API and renders the result.

### **Basic Project Ideas:**
1. **Test the To-Do List App:** Write tests for adding, editing, and deleting tasks in the to-do list app.
2. **Test the Registration Form:** Write unit tests and validation tests for the registration form created earlier.

---

## **Module 12: Deploying React Applications**
### **Basic Project Ideas:**
1. **Deploy the Weather App:** Deploy a weather app that fetches data from an API and displays current weather conditions.
2. **Deploy the To-Do List App:** Deploy the to-do list app created in earlier modules to Netlify or GitHub Pages.

---

## **Module 13: Advanced React Patterns**


### **Coding Questions:**
1. Implement the render props pattern in a component.
2. Use the higher-order component (HOC) pattern to add logging functionality to a component.
3. Write a component using the compound component pattern to manage state across multiple child components.
4. Implement a hook factory function that generates multiple custom hooks with similar logic.
5. Use the context API to create a Provider-Consumer component pattern for managing global state.

### **Basic Project Ideas:**
1. **Compound Component for Tabs:** Build a tab component where users can switch between tabs. Use the compound component pattern to manage the state of the tabs.
2. **Higher-Order Component for Authentication:** Create an HOC that checks if a user is authenticated before allowing access to a specific route.

