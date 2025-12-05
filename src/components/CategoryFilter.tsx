import type { Category } from '../types';

interface CategoryFilterProps {
  selected: Category | 'All';
  onSelect: (category: Category | 'All') => void;
}

function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  const categories: (Category | 'All')[] = ['All', 'Buttons', 'Forms', 'Cards', 'Data Display'];

  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`filter-button ${selected === category ? 'active' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;