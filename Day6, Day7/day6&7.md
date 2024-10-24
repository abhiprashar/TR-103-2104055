# Web Development Training - Day 6,7
DOM Manipulation in JavaScript
------------------------------

**DOM** stands for **Document Object Model**. It's a programming interface for HTML and XML documents. It represents the document's structure as a tree of nodes, allowing JavaScript to interact with and manipulate elements, attributes, and styles.

### Basic DOM Manipulation

**1\. Selecting Elements:**

-   **getElementById:** Selects an element by its ID.

    JavaScript

    ```
    const elementById = document.getElementById('myElement');

    ```


-   **getElementsByTagName:** Selects elements by their tag name.

    JavaScript

    ```
    const elementsByTagName = document.getElementsByTagName('p');

    ```


-   **getElementsByClassName:** Selects elements by their class name.

    JavaScript

    ```
    const elementsByClassName = document.getElementsByClassName('myClass');

    ```


-   **querySelector:** Selects the first element that matches a CSS selector.

    JavaScript

    ```
    const elementBySelector = document.querySelector('.myClass');

    ```


-   **querySelectorAll:** Selects all elements that match a CSS selector.

    JavaScript

    ```
    const elementsBySelectorAll = document.querySelectorAll('p.myClass');

    ```


**2\. Modifying Element Content:**

-   **textContent:** Sets or gets the text content of an element.

    JavaScript

    ```
    elementById.textContent = 'New Text';

    ```


-   **innerHTML:** Sets or gets the HTML content of an element.

    JavaScript

    ```
    elementById.innerHTML = '<strong>Bold Text</strong>';

    ```


**3\. Modifying Element Attributes:**

-   **setAttribute:** Sets an attribute and its value.

    JavaScript

    ```
    elementById.setAttribute('title', 'This is a title');

    ```


-   **getAttribute:** Gets the value of an attribute.

    JavaScript

    ```
    const title = elementById.getAttribute('title');

    ```


-   **removeAttribute:** Removes an attribute.

    JavaScript

    ```
    elementById.removeAttribute('title');

    ```


**4\. Creating and Removing Elements:**

-   **createElement:** Creates a new element.

    JavaScript

    ```
    const newParagraph = document.createElement('p');

    ```


-   **appendChild:** Appends a child element to a parent.

    JavaScript

    ```
    document.body.appendChild(newParagraph);

    ```


-   **insertBefore:** Inserts an element before another.

    JavaScript

    ```
    const existingParagraph = document.getElementById('existingParagraph');
    document.body.insertBefore(newParagraph, existingParagraph);

    ```


-   **removeChild:** Removes a child element from a parent.

    JavaScript

    ```
    document.body.removeChild(newParagraph);

    ```


**5\. Styling Elements:**

-   **style Property:** Directly modifies the style properties of an element.

    JavaScript

    ```
    elementById.style.color = 'red';
    elementById.style.fontSize = '20px';

    ```


-   **classList:** Manages the class list of an element.

    JavaScript

    ```
    elementById.classList.add('myClass');
    elementById.classList.remove('myClass');
    elementById.classList.toggle('myClass');
    ```