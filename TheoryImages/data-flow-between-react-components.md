## Flowchart
This diagram shows:

- The parent component (`DataPassingDemo`) managing the `count` state and `handleIncrement` function
- Data flowing down to child components via props
- The update function being passed to `IncrementButton`
- The flow of updates when the increment function is called

<br><br><br><br>

```mermaid

graph TD
  A[DataPassingDemo]
  B[DisplayCount]
  C[IncrementButton]
  D[count state]
  E[handleIncrement function]
  
  A -->|count prop| B
  A -->|onIncrement prop| C
  D -->|read| A
  E -->|update| D
  C -->|call| E
  
  style A fill:#f9f,stroke:#033,stroke-width:4px
  style B fill:#bbf,stroke:#333,stroke-width:2px
  style C fill:#bfb,stroke:#333,stroke-width:2px
  style D fill:#ff9,stroke:#333,stroke-width:2px
  style E fill:#f99,stroke:#333,stroke-width:2px

  ```