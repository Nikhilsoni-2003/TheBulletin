function NewsList({ articles }) {
  return (
    <div style={{ marginTop: "20px" }}>
      {articles.length === 0 ? (
        <p>No news available.</p>
      ) : (
        articles.map((article, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              background: "#101010",
            }}
          >
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noreferrer">
              Read more
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default NewsList;
