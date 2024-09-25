## FlowChart
- JSX combines HTML-like syntax with JavaScript expressions
- JSX is transformed (usually by Babel) into pure JavaScript
- The resulting JavaScript creates React elements
- React elements are eventually rendered as DOM elements

<br><br><br><br>
```mermaid

graph TD
  A[JSX]
  B[HTML-like Syntax]
  C[JavaScript Expressions]
  D[React Elements]
  E[DOM Elements]
  
  A --> B
  A --> C
  A --> D
  D --> E
  
  F[Babel Transformation]
  A --> F
  F --> G[Pure JavaScript]
  G --> D

  ```