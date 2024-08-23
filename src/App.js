import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";

function App() {
  let [newsletter, setNewsletter] = useState(false);

  const onNewsletterChange = (checked) => {
    setNewsletter(checked);
  };

  return (
    <>
      <ToggleSwitch
        id="newsletter"
        checked={newsletter}
        onChange={onNewsletterChange}
      />
      <label htmlFor="newsletter">Subscribe to our Newsletter</label>
    </>
  );
}


export default App;
