# Part 0 - 0.6

```mermaid
sequenceDiagram
    participant browser as Browser
    participant server as Server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server-->>browser: {"message":"note created"}
```