import React, { PropsWithChildren, useState } from 'react';

interface Options extends PropsWithChildren {
  options?: number;
  option_names?: string[];
  menu_title?: string;
  children?: React.ReactNode
}

// const { children } = props

const SelectorDropdown: React.FC<Options> = ({ 
  options,
  option_names = [],
  menu_title
}: Options) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  
  // Helper function to create the list of options
  const createOptions = () => {
    // return [...options?.children || [], ...option_names?.map((name, index) => ({ value: name }))];
    return [[], ...option_names?.map((name, index) => ({ value: name }))];
  };

  if (menu_title) {
    return (
      <div className="mb-3 block text-sm font-medium">
        {menu_title}
      </div>
    );
  }

  return (
    <>
    <div>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        Select {menu_title || "Transfer Window Period"}
      </label>
      <select
        value={selectedOption}
        onChange={(e) => {
                    // The changeTextColor function is now moved to a separate function if needed

          setSelectedOption(e.target.value);
        }}
        className="relative z-20 bg-white dark:bg-form-input w-full appearance-none rounded border border-stroke bg-transparent px-12 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
      >
        {option_names?.map((option, index) => (
            <option
              key={index}
              value={option}
              disabled={!selectedOption === option}
            >
              {option}
            </option>
          ))}
          </select>
          </div>
    </>
  );
};

export default SelectorDropdown;