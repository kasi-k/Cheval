import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-4 flex items-center border rounded-full p-2 bg-white dark:bg-[#282828]">
      <Search className="size-5 text-gray-500" />
      <input
        type="text"
        className="w-full outline-none px-2 bg-transparent text-black dark:text-white"
        placeholder="Search Enquiries..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
