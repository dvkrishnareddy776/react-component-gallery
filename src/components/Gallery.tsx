import { useState, useMemo } from "react";
import type { ComponentInfo, Category } from "../types";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ComponentCard from "./ComponentCard";

interface GalleryProps {
  components: ComponentInfo[];
}

function Gallery({ components }: GalleryProps) {
  // ✅ Search query state
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Category filter state
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
    "All"
  );

  // ✅ Reset filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  // ✅ Combined filtering logic (category + search)
  const filteredComponents = useMemo(() => {
    const query = searchQuery.toLowerCase();

    return components.filter((comp) => {
      const matchesCategory =
        selectedCategory === "All" || comp.category === selectedCategory;

      const matchesSearch =
        comp.name.toLowerCase().includes(query) ||
        comp.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [components, searchQuery, selectedCategory]);

  return (
    <div className="gallery">
      {/* ✅ Controls */}
      <div className="gallery-controls">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <CategoryFilter
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {/* ✅ Result count */}
      <div className="gallery-results">
        <p className="result-count">
          Showing {filteredComponents.length} of {components.length} components
        </p>
      </div>

      {/* ✅ Empty State */}
      {filteredComponents.length === 0 ? (
        <div className="empty-state">
          <p>No components found matching your filters.</p>

          <button className="clear-filters-btn" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="gallery-grid">
          {filteredComponents.map((comp) => (
            <ComponentCard key={comp.id} info={comp} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
