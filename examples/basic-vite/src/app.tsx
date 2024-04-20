import { useState } from "react";
import archiveBoxArrowDownIconHref from "./archive-box-arrow-down.svg";
import blendingModeIconHref from "@radix-ui/icons/icons/blending-mode.svg";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <svg width="100" height="100" aria-hidden>
          <use href={archiveBoxArrowDownIconHref} />
        </svg>

        <svg width="100" height="100" aria-hidden>
          <use href={blendingModeIconHref} />
        </svg>
      </div>
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
    </div>
  );
};
