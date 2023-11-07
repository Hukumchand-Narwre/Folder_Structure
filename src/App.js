import RenderFolder from "./component/RenderFolder";
import "./styles.css";
const inputData = [
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

export default function App() {
  return (
    <div>
      {inputData.map((folder, index) => (
        <RenderFolder
          key={index}
          folder={folder}
          index={index}
          subfolder={false}
        />
      ))}
    </div>
  );
}
