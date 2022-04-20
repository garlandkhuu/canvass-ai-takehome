# Take home assignment

- [x] Create `Project` component based on the `Project card.png` sketch
  Feel free to use any css styling approach for this assignment (styled-components, css modules, `className` props etc.)

- [x] Use data from `data.js` file to generate a list of `Project` components

- [x] Use `Search` input component to filter projects list by name
  This task requires to write a JS function to filter projects if matched with a search query, or some *Nothing found* placeholder if there’s no match

- [x] Without using any form input libraries implement a tags input component
  The input component that takes text as input and by hitting Enter transforms the input into a tag that is displayed inside the input field. Each tag has a button to remove it.
  Here is the example of Bootstrap plugin: [Bootstrap Tags Input](https://bootstrap-tagsinput.github.io/bootstrap-tagsinput/examples/)

- [x] When you are done with the assignment answer the following questions in this README:
  - How much time did you spend on the assignment?
    - I spent roughly 3.5 hours on this assignment.
    
  - What was the most difficult task?
    - The most difficult task was creating the tag input component, there were many dynamic parts to it and I had to make sure it felt smooth and consistent. Since I had to create the illusion that the entire bar was an input even though the actual input was inside of it, I had to emulate the focus state through React. Dealing with the overflow of the bar was also a bit annoying. To improve upon my solution, I would try and make the input element expand as the user types and then wrap it to the next line if it overflows.
  
  Feel free to share any other notes on this assignment


## After completion
Upload the repo to any source-code-hosting (GitHub, GitLab, etc.) and provide a link to it
