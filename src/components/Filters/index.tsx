import { useState } from 'react';
import css from "./index.module.scss";
interface FilterOption {
  value: string;
  label: string;
}

interface FiltersProps {
  onFilterChange?: (filters: Record<string, string>) => void;
}

const Filters = ({ onFilterChange }: FiltersProps) => {
  const [filters, setFilters] = useState<Record<string, string>>({
    category: '',
    price: '',
    rating: '',
    status: '',
  });

  const filterOptions: Record<string, FilterOption[]> = {
    category: [
      { value: '', label: 'Все категории' },
      { value: 'electronics', label: 'Электроника' },
      { value: 'clothing', label: 'Одежда' },
      { value: 'books', label: 'Книги' },
    ],
    price: [
      { value: '', label: 'Все цены' },
      { value: '0-50', label: '0-50' },
      { value: '50-100', label: '50-100' },
      { value: '100+', label: '100+' },
    ],
    rating: [
      { value: '', label: 'Все рейтинги' },
      { value: '1', label: '1 звезда' },
      { value: '2', label: '2 звезды' },
      { value: '3', label: '3 звезды' },
      { value: '4', label: '4 звезды' },
      { value: '5', label: '5 звезд' },
    ],
    status: [
      { value: '', label: 'Все статусы' },
      { value: 'available', label: 'В наличии' },
      { value: 'out-of-stock', label: 'Нет в наличии' },
    ],
  };

  const handleChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onFilterChange) onFilterChange(newFilters);
  };

  return (
    <div className={css.filters}>
      {Object.keys(filterOptions).map((filterKey) => (
        <div className={css.filterContainer}>
        <select
          key={filterKey}
          value={filters[filterKey]}
          onChange={(e) => handleChange(filterKey, e.target.value)}
          className={css.filterSelect}
        >
          {filterOptions[filterKey].map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        </div>
      ))}
    </div>
  );
};

export default Filters;