import css from "./index.module.scss";
import { useState, type FormEvent } from "react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  initialQuery?: string;
}

const SearchField = ({
  onSearch,
  placeholder = "Поиск товаров...",
  initialQuery = "",
}: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <div className={css.search}>
      <form className={css.searchBar} onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={css.searchInput}
        />
      </form>
    </div>
  );
};

export default SearchField;
