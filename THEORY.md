### **Module 1: Introduction to React**

- What is React?

1. Theory: What is React?
   React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies. React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple.
   Key concepts of React include:

   1. Components: Reusable pieces of code that return a React element to be rendered to the page.
   2. JSX: A syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.
   3. Virtual DOM: A lightweight copy of the actual DOM that React uses to optimize rendering performance.
   4. State and Props: Ways to manage and pass data in React applications.

- Setting up the React environment (Node.js, npm, and create-react-app)

  1. Theory: Setting up the React Environment

  Setting up a React environment involves installing and using several tools:

        1. Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on your computer, not just in a browser.
        2. npm (Node Package Manager): Comes with Node.js and helps you install and manage packages (libraries and tools) for your projects.
        3. create-react-app: A tool that sets up a new React project with a good default configuration, saving you from the complex setup process.

  These tools work together to create a development environment where you can build React applications efficiently.

  Here's a step-by-step guide to setting up a React environment, along with the commands you'd use: ## Step 1: Install Node.js and npm ## Download and install from https://nodejs.org

        ## Step 2: Verify installation
        node --version
        npm --version

        ## Step 3: Install create-react-app globally
        npm install -g create-react-app

        ## Step 4: Create a new React project
        npx create-react-app my-react-app

        ## Step 5: Navigate to your new project directory
        cd my-react-app

        ## Step 6: Start the development server
        npm start

- React Components: Functional vs. Class Components

  1. Theory: React Components - Functional vs. Class

  React components are the building blocks of React applications. They are reusable pieces of code that return React elements to be rendered to the page. There are two main types of components in React:

  1. Functional Components:

     1. Also known as stateless components or function components
     2. Written as JavaScript functions
     3. Can use Hooks to manage state and side effects
     4. Simpler syntax and easier to understand
     5. Preferred in modern React development

  1. Class Components:

     1. Also known as stateful components
     2. Written as ES6 classes
     3. Can have their own state and lifecycle methods
     4. More complex syntax
     5. Less commonly used in modern React development, but still supported

  The main differences lie in their syntax, how they manage state, and how they handle lifecycle events.

  Let's create examples of both Functional and Class components to illustrate their differences:

              import React, { useState, useEffect } from 'react'
              // Functional Component
              function FunctionalCounter() {
              const [count, setCount] = useState(0)

              useEffect(() => {
                  document.title = `Count: ${count}`
              }, [count])

              return (
                  <div className="p-4 bg-blue-100 rounded-lg mb-4">
                  <h2 className="text-xl font-bold mb-2">Functional Counter</h2>
                  <p>Count: {count}</p>
                  <button
                      onClick={() => setCount(count + 1)}
                      className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
                  >
                      Increment
                  </button>
                  </div>
              )
              }

              // Class Component
              class ClassCounter extends React.Component {
              constructor(props) {
                  super(props)
                  this.state = { count: 0 }
              }

              componentDidUpdate() {
                  document.title = `Count: ${this.state.count}`
              }

              render() {
                  return (
                  <div className="p-4 bg-green-100 rounded-lg">
                      <h2 className="text-xl font-bold mb-2">Class Counter</h2>
                      <p>Count: {this.state.count}</p>
                      <button
                      onClick={() => this.setState({ count: this.state.count + 1 })}
                      className="bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600"
                      >
                      Increment
                      </button>
                  </div>
                  )
              }
              }

              // Parent component to render both counters
              export default function ComponentComparison() {
              return (
                  <div className="max-w-md mx-auto mt-8">
                  <h1 className="text-2xl font-bold mb-4">React Components Comparison</h1>
                  <FunctionalCounter />
                  <ClassCounter />
                  </div>
              )
              }

  This example demonstrates: 1. A Functional Component using the useState and useEffect hooks 2. A Class Component using state and componentDidUpdate lifecycle method 3. Both components implement the same functionality (a counter that updates the document title) 4. The syntax and structural differences between the two types of components
  <br><br>

- JSX: Introduction and Basic Syntax

  1.  Theory: Introduction to JSX

      - JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It was created by Facebook for use with React. JSX allows you to write HTML-like code in your JavaScript files, making it easier to describe what the UI should look like.

      Key points about JSX:

      - It's not required for React, but it's highly recommended and widely used.
      - It allows you to mix JavaScript and HTML-like syntax in the same file.
      - JSX is not understood by browsers directly; it needs to be transformed into regular JavaScript.
      - It helps prevent XSS (cross-site scripting) attacks by escaping embedded values by default.

  2.  Code Example:
      Let's create a React component that demonstrates the basic syntax of JSX:

              import React from 'react'
              export default function JSXDemo() {
              const name = 'React Developer'
              const greeting = <h1>Hello, {name}!</h1>
              const list = ['Learn JSX', 'Build with React', 'Create amazing apps']
              return (
                  <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
                  {greeting}
                  <p className="mt-4 text-gray-600">
                      JSX allows you to write HTML-like code in your JavaScript!
                  </p>
                  <div className="mt-4">
                      <h2 className="text-lg font-semibold">Your Todo List:</h2>
                      <ul className="list-disc list-inside">
                      {list.map((item, index) => (
                          <li key={index} className="text-blue-600">
                          {item}
                          </li>
                      ))}
                      </ul>
                  </div>
                  <button
                      onClick={() => alert('JSX is awesome!')}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                      Click me
                  </button>
                  </div>
                      )
                  }

      This example demonstrates several key features of JSX:

          1. Embedding expressions: `{name}`, `{list.map(...)}`
          2. Using JavaScript variables to hold JSX: `const greeting = <h1>Hello, {name}!</h1>`
          3. Using JSX in return statements
          4. Applying CSS classes: `className="..."`
          5. Handling events: `onClick={...}`
          6. Rendering lists with `map()`
          7. Self-closing tags: `<input />`

- Understanding Props

  1.  Theory: Understanding Props in React

      Props (short for "properties") are a way of passing data from parent components to child components in React. They are read-only and help make your components more dynamic and reusable. Key points about props:

      - Props are passed to components like attributes in HTML
      - They can be of any type: strings, numbers, objects, arrays, functions, etc.
      - Props are immutable, meaning child components can't modify the props they receive
      - They allow components to be configured dynamically by their parent components
      - Props facilitate the unidirectional data flow in React applications

  2.  Code Example:
      Let's create a React component that demonstrates the use of props:

          import React from 'react'
          // Child component receiving props
          function Greeting({ name, age, hobbies }) {
          return (
              <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">Hello, {name}!</h2>
              <p className="mb-2">You are {age} years old.</p>
              <div>
                  <strong>Your hobbies:</strong>
                  <ul className="list-disc list-inside">
                  {hobbies.map((hobby, index) => (
                      <li key={index}>{hobby}</li>
                  ))}
                  </ul>
              </div>
              </div>
          )
          }

          // Parent component passing props
          export default function PropsDemo() {
          const user = {
              name: "Alice",
              age: 28,
              hobbies: ["Reading", "Painting", "Cycling"]
          }

          return (
              <div className="max-w-md mx-auto mt-10">
              <h1 className="text-3xl font-bold mb-4">Understanding Props</h1>
              <Greeting
                  name={user.name}
                  age={user.age}
                  hobbies={user.hobbies}
              />
              </div>
          )
          }

      This example demonstrates several key features of props:

      1. Passing props: The `PropsDemo` component passes `name`, `age`, and `hobbies` to the `Greeting` component.
      2. Receiving props: The `Greeting` component receives these props as an object and uses destructuring to extract them.
      3. Using props: The received props are used within the `Greeting` component to render dynamic content.
      4. Passing different types: We're passing a string (`name`), a number (`age`), and an array (`hobbies`) as props.
      5. Rendering lists from props: The `hobbies` array is mapped to create list items.

- Passing Data Between Components
  1. Theory: Passing Data Between Components in React

In React, data can be passed between components in several ways:

1. Props: For passing data from parent to child components.
2. Lifting State Up: For sharing state between sibling components via a common parent.
3. Context API: For passing data through the component tree without explicitly passing props.
4. State Management Libraries: For more complex applications, libraries like Redux or MobX can be used.

We'll focus on the first two methods as they are the most common and fundamental to React.

2.  Code Example:
    Let's create a React application that demonstrates passing data between components:

        import React, { useState } from 'react'
        function DisplayCount({ count }) {
        return (
            <div className="bg-blue-100 p-4 rounded-lg mb-4">
            <h2 className="text-xl font-bold mb-2">Display Count</h2>
            <p>The current count is: {count}</p>
            </div>
        )
        }

        // Child component for incrementing count
        function IncrementButton({ onIncrement }) {
        return (
            <button
            onClick={onIncrement}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
            Increment Count
            </button>
        )
        }

        // Parent component managing state and passing data
        export default function DataPassingDemo() {
        const [count, setCount] = useState(0)

        const handleIncrement = () => {
            setCount(prevCount => prevCount + 1)
        }

        return (
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-4">Passing Data Between Components</h1>
            <DisplayCount count={count} />
            <IncrementButton onIncrement={handleIncrement} />
            </div>
        )
        }

    This example demonstrates several key concepts of passing data between components:

    1. Passing data down via props: The `count` state is passed from `DataPassingDemo` to `DisplayCount`.
    2. Passing functions as props: The `handleIncrement` function is passed to `IncrementButton` as `onIncrement`.
    3. Lifting state up: The `count` state is managed in the parent component, allowing it to be shared between children.
    4. Updating shared state: When the button is clicked, it calls the function passed via props, updating the state in the parent.

- Props Validation with PropTypes

  1.  Theory: Props Validation with PropTypes in React

      PropTypes is a mechanism in React for validating the props that are passed to components. It helps catch bugs by validating the data types of props and can also enforce whether a prop is required or optional. Key points about PropTypes:

      - It's a type checking library for React props
      - Helps developers catch errors early in development
      - Provides clear warnings in the console when props don't match the expected types
      - Can specify if a prop is required or optional
      - Supports a wide range of JavaScript types and custom validators

  2.  Code Example:
      Let's create a React component that demonstrates the use of PropTypes:

          import React from 'react'
          import PropTypes from 'prop-types'

          function UserProfile({ name, age, email, isStudent, courses }) {
          return (
              <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">{name}'s Profile</h2>
              <p className="mb-2"><strong>Age:</strong> {age}</p>
              <p className="mb-2"><strong>Email:</strong> {email}</p>
              <p className="mb-2"><strong>Student:</strong> {isStudent ? 'Yes' : 'No'}</p>
              {isStudent && (
                  <div>
                  <strong>Courses:</strong>
                  <ul className="list-disc list-inside">
                      {courses.map((course, index) => (
                      <li key={index}>{course}</li>
                      ))}
                  </ul>
                  </div>
              )}
              </div>
          )
          }

          UserProfile.propTypes = {
          name: PropTypes.string.isRequired,
          age: PropTypes.number,
          email: PropTypes.string.isRequired,
          isStudent: PropTypes.bool,
          courses: PropTypes.arrayOf(PropTypes.string)
          }

          UserProfile.defaultProps = {
          age: 0,
          isStudent: false,
          courses: []
          }

          export default function PropTypesDemo() {
          return (
              <div className="max-w-md mx-auto mt-10">
              <h1 className="text-3xl font-bold mb-4">PropTypes Validation Demo</h1>
              <UserProfile
                  name="Alice Johnson"
                  age={28}
                  email="alice@example.com"
                  isStudent={true}
                  courses={["React", "Node.js", "GraphQL"]}
              />
              </div>
          )
          }

  This example demonstrates several key features of PropTypes:

  1. Importing PropTypes: We import the PropTypes library.
  2. Defining PropTypes: We define the expected types for each prop in `UserProfile.propTypes`.
  3. Required props: `name` and `email` are marked as required using `isRequired`.
  4. Optional props: `age`, `isStudent`, and `courses` are optional.
  5. Array validation: `courses` is defined as an array of strings.
  6. Default props: We set default values for optional props using `UserProfile.defaultProps`.


- Understanding React State
    1. Theory: Understanding React State:
        - React State is a way to manage and store data within a component that can change over time. Key points about React State:

            - It's mutable (changeable) data specific to a component
            - When state changes, React re-renders the component
            - State is initialized in the constructor for class components or with the useState hook for functional components
            - State should be updated using setState for class components or the state setter function for hooks
            - State updates may be asynchronous
            - State can be passed down to child components as props

2. Code Example:

  - Let's create a React component that demonstrates the use of state:

        import React, { useState } from 'react'
        export default function StateDemo() {
        const [count, setCount] = useState(0)
        const [text, setText] = useState('')

        const incrementCount = () => {
            setCount(prevCount => prevCount + 1)
        }

        const handleTextChange = (event) => {
            setText(event.target.value)
        }

        return (
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-4">Understanding React State</h1>
            
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Counter Example</h2>
                <p className="mb-2">Count: {count}</p>
                <button 
                onClick={incrementCount}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                Increment
                </button>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">Input Example</h2>
                <input
                type="text"
                value={text}
                onChange={handleTextChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type something..."
                />
                <p className="mt-2">You typed: {text}</p>
            </div>
            </div>
        )
        }

- This example demonstrates several key concepts of React State:

    1. Using the `useState` hook to create state variables (`count` and `text`)
    2. Initializing state with default values (0 for count, '' for text)
    3. Updating state using the setter functions (`setCount` and `setText`)
    4. Using a function to update state based on the previous state (`setCount(prevCount => prevCount + 1)`)
    5. Handling user input to update state (`handleTextChange`)
    6. Rendering state values in the component
