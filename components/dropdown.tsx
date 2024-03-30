import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Option = {
  value: string;
  label: string;
  href: string;
};

type DropdownProps = {
  options: Option[];
  value: string;
};

const Dropdown: React.FC<DropdownProps> = ({ options, value }) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelectOption = (option: Option) => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="dropdown relative" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {value}
      </button>
      {isOpen && (
        <ul className="dropdown-menu absolute w-max bg-cyan-700 right-0 top-11 border border-white">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelectOption(option)}>
              <a
                href={option.href}
                className={`px-6 py-2 hover:bg-cyan-900 ${
                  pathname === option.href && "bg-cyan-900"
                } text-sm sm:text-base duration-200`}
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
