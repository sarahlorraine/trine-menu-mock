
## Project summary

This project was created to showcase potential alternatives to a mobile tab menu in Trine. Three examples have been prototyped.

### 1. `Select dropdown` 

**`Recommended`**  
**Pros:** Scalable, simple and can use standard `<select>` element which can take on the default functionality of the browser/device.    
**Cons:** Requires a different component/HTML elements to render in mobile view and desktop view.   

### 2. `Truncated menu`

**Pros:** Scaleable, visually similar to the desktop view.  
**Cons:** Menu items must be hidden which presents the possibility that the required menu cannot be found by the user. Extra clicks required to access hidden menu items.

### 3. `Iconified tabs`

**Pros:** Minimal with the ability to have all tabs in view at once.  
**Cons:** Not scalable if more than one more tab is added. Will most likely present new UX issues if icons are not intuitive and easily understood by the user.

---
## Running the project

The project is using React.js and packaged and compiled using Node.js (npm) and Webpack. Components are styled using Sass.

- Clone/download repository to your local environment
- Go to the terminal and navigate to the project directory
- Run `npm install` to install node_modules locally 
- Run `npm run start`. The browser should open automatically and the local environment should be successfully running