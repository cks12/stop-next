import { useState, useEffect } from "react";

type PopupProps = {
  message: string;
};

export default function Popup({ message }: PopupProps) {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`fixed ${
        showPopup ? "translate-x-0" : "-translate-x-full"
      } left-0 bottom-0 w-96 bg-white shadow-xl overflow-hidden z-50 transition-transform ease-in-out duration-300 transform`}
    >
      <div className="px-4 py-4">
        <p className="text-gray-800">{message}</p>
      </div>
      <button
        className="block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 w-full text-center"
        onClick={() => setShowPopup(false)}
      >
      </button>
    </div>
  );
}