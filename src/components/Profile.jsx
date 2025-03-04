import PropTypes from "prop-types";
import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <div className="profile__info">
        <img src={image} alt="User avatar" className="profile__avatar" />
        <p className="profile__name">{name}</p>
        <p className="profile__tag">@{tag}</p>
        <p className="profile__location">{location}</p>
      </div>
      <ul className="profile__stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity stat-followers">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity stat-views">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity stat-likes">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
