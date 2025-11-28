import React, { useState } from "react";

export default function MultiSelect({ label, options, selected, setSelected }) {
  const [open, setOpen] = useState(false);

  const handleCheck = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="w-full mb-4">
      {/* Dropdown button */}
      <div
        className=" p-4 rounded-2xl flex justify-between items-center cursor-pointer bg-white shadow-lg"
        onClick={() => setOpen(!open)}
      >
        <span className="text-gray-700 font-medium">
          {label} ({selected.length})
        </span>
        <span
          className={`transform transition-transform duration-300 text-brand-primary ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>

      {/* Dropdown content */}
      {open && (
        <div className=" p-3 rounded-2xl mt-4 bg-white shadow-2xl border-t-4  max-h-80 overflow-y-auto">
          {options.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 mb-2 cursor-pointer hover:text-brand-primary/80 transition duration-200"
            >
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => handleCheck(opt)}
                className="w-5 h-5 text-brand-secondary rounded focus:ring-brand-secondary"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
