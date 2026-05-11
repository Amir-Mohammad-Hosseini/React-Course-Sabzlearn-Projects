import React from "react";

const Icon = ({ text, icon }) => {
  return (
    <button href="#" class="nav-item mini group">
      {icon}

      <div data-tooltip="tooltip" class="tooltip">
        {text}
      </div>
    </button>
  );
};

export default Icon;
