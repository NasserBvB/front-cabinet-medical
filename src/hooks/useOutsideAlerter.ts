import React from "react";

export default function useOutsideAlerter(
    ref: React.RefObject<HTMLDivElement>,
    toggleOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
    React.useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (ref.current && !ref.current.contains(event.target as any)) {
          toggleOpen(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, toggleOpen]);
}
