``` mermaid
    participant browser
    participant server

    Note right of browser: The broswer enters a note in the text field and submits the form
    browser->>server:   POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser:  201 Created [{"message":"note created"}]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```