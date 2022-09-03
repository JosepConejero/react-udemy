import PropTypes from "prop-types";

export const GifItem = ({ title, url, id, onDelete }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      <button onClick={onDelete}>delete</button>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
