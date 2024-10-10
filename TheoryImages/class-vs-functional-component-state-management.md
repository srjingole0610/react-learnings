## FLOWCHART
This diagram shows:

- The two types of React components
- How state is managed in each type (this.state vs useState)
- How state is updated (this.setState vs setter function)
- How side effects are handled (lifecycle methods vs useEffect)

<br><br><br><br>

```mermaid

graph TD
  A[React Components]:::highlight
  B[Class Components]:::highlight
  C[Functional Components]:::highlight
  D[this.state]:::highlight
  E[this.setState]:::highlight
  F[Lifecycle Methods]:::highlight
  G[useState Hook]:::highlight
  H[setter function]:::highlight
  I[useEffect Hook]:::highlight

  A --> B
  A --> C
  B --> D
  B --> E
  B --> F
  C --> G
  C --> H
  C --> I

  style A fill:#f9f,stroke:#333,stroke-width:4px
  style B fill:#bbf,stroke:#333,stroke-width:4px
  style C fill:#bfb,stroke:#333,stroke-width:4px
  style D fill:#ff9,stroke:#333,stroke-width:2px
  style E fill:#ff9,stroke:#333,stroke-width:2px
  style F fill:#ff9,stroke:#333,stroke-width:2px
  style G fill:#f99,stroke:#333,stroke-width:2px
  style H fill:#f99,stroke:#333,stroke-width:2px
  style I fill:#f99,stroke:#333,stroke-width:2px

  classDef highlight font-size:18px,font-weight:bold,color:#000;

  ```