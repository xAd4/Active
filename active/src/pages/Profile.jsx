import { useState } from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "Kevin Anderson",
    role: "Web Designer",
    about:
      "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.",
    company: "Lueilwitz, Wisoky and Leuschke",
    job: "Web Designer",
    country: "USA",
    address: "A108 Adam Street, New York, NY 535022",
    phone: "(436) 486-3538 x29071",
    email: "k.anderson@example.com",
    twitter: "https://twitter.com/#",
    facebook: "https://facebook.com/#",
    instagram: "https://instagram.com/#",
    linkedin: "https://linkedin.com/#",
  });

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="profile-container">
      <nav className="profile-nav">
        <span>Home</span>
        <span>/</span>
        <span>Users</span>
        <span>/</span>
        <span>Profile</span>
      </nav>

      <div className="profile-content">
        <div className="profile-sidebar">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="profile-image"
          />
          <h2>{userData.fullName}</h2>
          <p className="role">{userData.role}</p>
          <div className="social-links">
            <a href={userData.twitter}>
              <Twitter size={20} />
            </a>
            <a href={userData.facebook}>
              <Facebook size={20} />
            </a>
            <a href={userData.instagram}>
              <Instagram size={20} />
            </a>
            <a href={userData.linkedin}>
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="profile-main">
          <div className="profile-tabs">
            <button
              className={!isEditing ? "active" : ""}
              onClick={() => setIsEditing(false)}
            >
              Overview
            </button>
            <button
              className={isEditing ? "active" : ""}
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          </div>

          {!isEditing ? (
            <div className="profile-details">
              <div id="profile-div">
                <h3>About</h3>
                <p>{userData.about}</p>
              </div>

              <div id="profile-div" className="mt-5">
                <h3>Profile Details</h3>
                <div className="details-grid">
                  <div className="detail-item">
                    <label>Full Name</label>
                    <p>{userData.fullName}</p>
                  </div>
                  <div className="detail-item">
                    <label>Company</label>
                    <p>{userData.company}</p>
                  </div>
                  <div className="detail-item">
                    <label>Job</label>
                    <p>{userData.job}</p>
                  </div>
                  <div className="detail-item">
                    <label>Country</label>
                    <p>{userData.country}</p>
                  </div>
                  <div className="detail-item">
                    <label>Address</label>
                    <p>{userData.address}</p>
                  </div>
                  <div className="detail-item">
                    <label>Phone</label>
                    <p>{userData.phone}</p>
                  </div>
                  <div className="detail-item">
                    <label>Email</label>
                    <p>{userData.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form className="edit-form" onSubmit={handleSaveChanges}>
              <div className="form-group">
                <label>Profile Image</label>
                <div className="profile-image-edit">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                  />
                  <div className="image-actions">
                    <button type="button" className="btn-upload">
                      Upload new image
                    </button>
                    <button type="button" className="btn-delete">
                      Delete current image
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>About</label>
                <textarea
                  name="about"
                  value={userData.about}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={userData.company}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Job</label>
                <input
                  type="text"
                  name="job"
                  value={userData.job}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={userData.country}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={userData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Twitter Profile</label>
                <input
                  type="url"
                  name="twitter"
                  value={userData.twitter}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Facebook Profile</label>
                <input
                  type="url"
                  name="facebook"
                  value={userData.facebook}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Instagram Profile</label>
                <input
                  type="url"
                  name="instagram"
                  value={userData.instagram}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Linkedin Profile</label>
                <input
                  type="url"
                  name="linkedin"
                  value={userData.linkedin}
                  onChange={handleInputChange}
                />
              </div>

              <button type="submit" className="btn-save">
                Save Changes
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
