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

    Here's a step-by-step guide to setting up a React environment, along with the commands you'd use:
        ## Step 1: Install Node.js and npm
        ## Download and install from https://nodejs.org

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

    2. Class Components:

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

    This example demonstrates:
        A Functional Component using the useState and useEffect hooks
        A Class Component using state and componentDidUpdate lifecycle method
        Both components implement the same functionality (a counter that updates the document title)
        The syntax and structural differences between the two types of components
        
    
- JSX: Introduction and Basic Syntax

    1. Theory: Introduction to JSX
        JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It was created by Facebook for use with React. JSX allows you to write HTML-like code in your JavaScript files, making it easier to describe what the UI should look like. Key points about JSX:

        - It's not required for React, but it's highly recommended and widely used.
        - It allows you to mix JavaScript and HTML-like syntax in the same file.
        - JSX is not understood by browsers directly; it needs to be transformed into regular JavaScript.
        - It helps prevent XSS (cross-site scripting) attacks by escaping embedded values by default.


    2. Code Example:
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


