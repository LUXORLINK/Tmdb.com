import { FC } from 'react';
import './Search.scss';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<SearchBarProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Поиск фильмов..."
        value={searchQuery}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default Search;
