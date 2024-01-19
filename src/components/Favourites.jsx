const Favourites = () => {
  return (
    <div className="fav-container">
      <div
        className="fav-header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="local-fav-nav">
          <h2>Favourites</h2>
        </div>
        <div className="local-fav-nav">
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
