import categories from "../data/categories";

function CategorySelector({ selectedCategory, onSelect }) {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "10px 0" }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          style={{
            background: selectedCategory === cat ? "#333" : "#ccc",
            color: selectedCategory === cat ? "#fff" : "#000",
            padding: "6px 12px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategorySelector;
