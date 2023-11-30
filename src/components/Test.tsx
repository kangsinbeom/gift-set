import { useState } from "react";
import Modal from "./modal/Modal";

const Test = () => {
  const [toggle, onToggle] = useState<boolean>(false);

  return (
    <>
      {toggle && (
        <Modal onClose={() => onToggle((prev) => !prev)}>
          <div>hello</div>
        </Modal>
      )}
      <button onClick={() => onToggle((prev) => !prev)}>hi</button>
    </>
  );
};

export default Test;
