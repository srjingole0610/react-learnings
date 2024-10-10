## FLOWCHART
This diagram shows:

- How user interactions trigger native DOM events
- The React event system wrapping native events into synthetic events
- Event handler functions receiving and processing these synthetic events
- How event handlers may update component state
- State updates triggering re-renders, which may lead to updated UI for further user interactions

<br><br><br><br>
```mermaid

graph TD
  A[User Interaction]:::highlight
  B[React Synthetic Event]:::highlight
  C[Event Handler Function]:::highlight
  D[State Update]:::highlight
  E[Component Re-render]:::highlight
  
  A -->|Triggers| B
  B -->|Passed to| C
  C -->|May cause| D
  D -->|Triggers| E
  E -->|Updates| A
  
  F[Native DOM Event]:::highlight
  G[React Event System]:::highlight
  
  F -->|Wrapped by| G
  G -->|Creates| B
  
  style A fill:#f9f,stroke:#333,stroke-width:4px
  style B fill:#bbf,stroke:#333,stroke-width:4px
  style C fill:#bfb,stroke:#333,stroke-width:4px
  style D fill:#fbf,stroke:#333,stroke-width:4px
  style E fill:#ff9,stroke:#333,stroke-width:4px
  style F fill:#ccc,stroke:#333,stroke-width:2px
  style G fill:#cfc,stroke:#333,stroke-width:2px

  classDef highlight font-size:18px,font-weight:bold,color:#000;

  ```