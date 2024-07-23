import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const TIMER = 3000;

  useEffect(() => {
    console.log("time");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      console.log("delete time");
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
