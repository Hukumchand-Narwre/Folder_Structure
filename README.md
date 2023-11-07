# URL for Homework
link - https://csb-xr6swr-cnojemq5p-hukumchand-narwre.vercel.app/
# Input structure
```javascript
[
  {
    name: "src",
    subfolders: [
      {
        name: "components",
        subfolders: [
          {
            name: "home",
            subfolders: [
              { name: "HomeScreen", subfolders: [], files: ["HomeScreen.jsx"] }
            ],
            files: []
          }
        ],
        files: ["RenderFolder.jsx"]
      }
    ],
    files: ["App.jsx", "index.jsx"]
  },
  {
    name: "about",
    subfolders: [
      {
        name: "About Users",
        subfolders: [{ name: "User", subfolders: [], files: ["User.jsx"] }],
        files: ["component1"]
      }
    ],
    files: ["About1.jsx", "About2.jsx"]
  }
];
```
# Algorithm
using Recursion. The input contains an array of objects each object representing a top-level folder. Each object contains the name of a folder, subfolders of that folder, and files in that folder. Subfolders are also an array of objects that contain the name of the folder, subfolders, and file. We can see the structure of the folder and subfolders are the same so we can apply recursion to handle any level of depth of subfolders

# Component
The component used is RenderFolder which expects an object containing name, subfolders, and files in input it is called recursively to display all the folders and subfolders
