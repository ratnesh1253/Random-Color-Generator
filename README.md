```markdown
# Random Color Generator

This project is a simple web application that generates a random color and updates the background color of a div element on a button click. It also displays the generated color code and adds a message indicating that a new color has been generated.

## Features

- Generates a random RGB color on button click.
- Updates the background color of a specified div with the generated color.
- Displays the RGB color code in an h3 element.
- Adds an h4 element with a message each time a new color is generated.

### Screenshot

![Random Color Generator](Screenshot1.JPG)
![Random Color Generator](Screenshot2.JPG)
![Random Color Generator](Screenshot3.JPG)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/random-color-generator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd random-color-generator
    ```

### Usage

1. Open the `index.html` file in your web browser.
2. Click the "Click to Generate Color" button to generate a random color.

### Files

- `index.html`: The HTML file that sets up the structure of the web page.
- `style.css`: The CSS file that styles the web page.
- `app.js`: The JavaScript file that contains the logic for generating random colors and updating the DOM.

## Code Overview

### HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h3>Generate a random color</h3>
    <br>
    <button>Click to Generate Color</button>
    <br><br>
    <div>This is generated color</div>

    <script src="app.js"></script>
</body>

</html>
```

### CSS

```css
body {
    text-align: center;
}

div {
    height: 100px;
    width: 500px;
    border: 2px solid black;
    margin: auto;
}
```

### JavaScript

```javascript
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let randomColor = getRandomColor();
  let h3 = document.querySelector("h3");
  h3.innerText = randomColor;
  document.querySelector("div").style.backgroundColor = randomColor;
  let h4 = document.createElement("h4");
  h4.innerText = "new color generated!";
  document.querySelector("body").insertAdjacentElement("beforeend", h4);
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
```

## Contact

If you have any questions or feedback, feel free to contact me at (email)[mailto:ratneshkshirsagar1253@gmail.com].
```
