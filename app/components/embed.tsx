'use client'

import { useEffect } from "react";

// Function to dynamically load the Substack embed script
const loadSubstackScript = () => {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://substack.com/embedjs/embed.js";
  script.charset = "utf-8";
  document.body.appendChild(script);
};

// Component where you want to include the Substack embed
const Embed = () => {
  useEffect(() => {
    loadSubstackScript();
  }, []);

  return (
    <div>
      {/* Add any HTML or content here */}
      <div id="substack-embed-container"></div>
    </div>
  );
};

export default Embed;
