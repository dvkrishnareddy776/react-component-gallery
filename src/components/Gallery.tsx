import { useState, useMemo } from "react";
import type { ComponentInfo, Category } from "../types";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ComponentCard from "./ComponentCard";

interface GalleryProps {
  components: ComponentInfo[];
}

function Gallery({ components }: GalleryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
    "All"
  );

  // ✅ Filtering logic (search + category)
  const filteredComponents = useMemo(() => {
    return components.filter((comp) => {
      const matchesSearch =
        comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || comp.category === selectedCategory;

      return matchesSearch && matchesCategory;
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
          Showing {filteredComponents.length} components
        </p>
      </div>

      {/* ✅ Grid of cards */}
      <div className="gallery-grid">
        {filteredComponents.map((comp) => (
          <ComponentCard key={comp.id} info={comp} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
