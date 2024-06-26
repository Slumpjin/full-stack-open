``` mermaid
    sequenceDiagram
        participant browser
        participant server

        Note right of browser: The broswer enters a note in the text field and submits the form

        browser->>server:   POST https://fullstack-exampleapp.herokuapp.com/new_note
        activate server
        server-->>browser:  302 Found
        deactivate server

        Note left of server: The server responds with a 302 Found status code and tells the browser to redirect back to /notes

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
        activate server
        server-->>browser: HTML document
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server
        server-->>browser: the css file
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
        activate server
        server-->>browser: the JavaScript file
        deactivate server

        Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
        deactivate server

        Note right of browser: The browser executes the callback function that renders the notes
```