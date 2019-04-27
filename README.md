# Dependent dropdowns using React.js
## Conditional dropdowns using React.js

In this project, there are two dropdowns. One that has countries and one that has cities.
The cities dropdown should only show after the countries dropdown is selected. 
That means: 
- It will NOT be active or shown initially on first page loads.
- Upon selecting the first drowpdown, it will show + it will have the correct cities that correspond to the first dropdown.
####For example
If USA is selected, show New York, Atlanta etc.
If Canada is selected show Toronto, Vancouver etc.

To view the real code look at src/components/

#### To achieve this, i'm using what's known as "conditional rendering" in React.js.
 See docs [here] (https://reactjs.org/docs/conditional-rendering.html)


#### To do later
Add codepen link