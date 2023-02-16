import React, {useState} from "react";
import Icon from "../icons";

function LoveButton () {

  const [locked, setLocked] = useState(false)

  const handleLock = () => {
    try {
      setLocked(true)
      setTimeout(() => setLocked(false), 1000);
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return <button
  className="actionButton loveButton"
  onClick={handleLock}>
  {
    locked
      ? <Icon name='done' classes='actionIcon loveIcon' />
      : <Icon name='love' classes='actionIcon loveIcon' />
  }
</button>
}

export default LoveButton