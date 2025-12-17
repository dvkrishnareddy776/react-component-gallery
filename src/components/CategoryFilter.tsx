import type { Category } from '../types';

interface CategoryFilterProps {
  selected: Category | 'All';
  onSelect: (category: Category | 'All') => void;
}

function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  // ✅ All available categories (including "All")
  const categories: (Category | 'All')[] = [
    'All',
    'Buttons',
    'Forms',
    'Cards',
    'Data Display'
  ];

  return (
    <div className="category-filter">
      {categories.map((category) => {
        const isActive = selected === category;

        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`filter-button ${isActive ? 'active' : ''}`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
