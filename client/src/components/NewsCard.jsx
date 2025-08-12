const NewsCard = ({ title, description, url, image, published }) => (
  <div style={{ border: "1px solid #000000", marginBottom: "10px", padding: "10px" }}>
    <h2>{title}</h2>
    <img src={image} alt="news" style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />
    <p>{description}</p>
    <p><small>{new Date(published).toLocaleString()}</small></p>
    <a href={url} target="_blank" rel="noreferrer">Read More</a>
  </div>
);

export default NewsCard;
