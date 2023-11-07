import { useState } from "react";
import FolderSvg from "./FolderSvg";
import FileSvg from "./FileSvg";

const RenderFolder = ({ folder, index, subfolder }) => {
  const [open, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevopen) => !prevopen);
  };

  const margin = subfolder && index * 4 + "px";

  return (
    <div style={{ marginLeft: `${margin}` }}>
      <h4 onClick={handleClick}>
        <FolderSvg />
        {folder.name}
      </h4>
      {open &&
        folder.files.map((file) => (
          <p style={{ marginLeft: `${margin}` }}>
            <FileSvg />
            {file}
          </p>
        ))}
      {open &&
        folder.subfolders.length > 0 &&
        folder.subfolders.map((folder, i) => (
          <RenderFolder
            key={i}
            folder={folder}
            index={i + 1}
            subfolder={true}
          />
        ))}
    </div>
  );
};

export default RenderFolder;
