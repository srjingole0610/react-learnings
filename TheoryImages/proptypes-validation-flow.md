## FLOWCHART
This diagram shows:

- Props being passed from a parent to a child component
- PropTypes validating these props based on the defined types
- Valid props being used by the component
- Invalid props triggering console warnings
- The role of PropTypes definition and default props in the process

<br><br><br><br>

```mermaid

graph TD
  A[Parent Component]:::highlight
  B[Child Component]:::highlight
  C[PropTypes Validation]:::highlight
  D[Console Warnings]:::highlight
  
  A -->|Props| B
  B -->|Props| C
  C -->|Valid| B
  C -->|Invalid| D
  
  E[PropTypes Definition]
  F[Default Props]
  
  E --> C
  F --> B
  
  style A fill:#f9f,stroke:#333,stroke-width:4px
  style B fill:#bbf,stroke:#333,stroke-width:4px
  style C fill:#bfb,stroke:#333,stroke-width:4px
  style D fill:#fbb,stroke:#333,stroke-width:4px
  style E fill:#ff9,stroke:#333,stroke-width:2px
  style F fill:#f99,stroke:#333,stroke-width:2px

  
   classDef highlight font-size:18px,font-weight:bold,color:#000;

  ```