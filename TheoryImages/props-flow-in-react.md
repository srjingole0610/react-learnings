## FlowChart

This diagram shows:

- Props being passed from a parent component to its children
- The unidirectional flow of data (top-down)
- The read-only nature of props in child components

<br><br><br><br>

```mermaid

graph TD
  A[Parent Component]
  B[Child Component 1]
  C[Child Component 2]
  D[Grandchild Component]

  A -->|props| B
  A -->|props| C
  B -->|props| D

  E[Props are Read-Only]
  F[Unidirectional Data Flow]

  B --- E
  C --- E
  D --- E
  A --- F

```
