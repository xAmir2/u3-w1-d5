import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

export const MainProfile = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800); 
  }, []);

  if (loading) {
    return (
      <div className="text-center text-light mt-5">
        <Spinner animation="border" variant="light" />
      </div>
    );
  }

  return (
    <main>
      <div className="container-fluid w-75 text-light">
        <div className="mt-3">
          <h1>Edit Profile</h1>
          <hr />
        </div>

        <div className="row">
          <div className="col-12 col-lg-4 text-lg-end">
            <div className="position-relative d-inline-block">
              <img
                src="/src/assets/avatar.png"
                alt="avatar"
                width="200"
                className="img-fluid p-1"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-pencil-fill position-absolute bottom-0 start-0 m-3 p-1 border rounded-circle bg-black text-white"
                viewBox="0 0 16 16"
              >
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708z" />
                <path d="M13.5 6.207 9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207z" />
              </svg>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="w-100 d-flex flex-column p-1">
              <div>
                <input
                  type="text"
                  className="form-control bg-secondary text-light border-0 rounded-0 w-75"
                  placeholder="Strive Student"
                />

                <div className="mt-4 w-50">
                  <p className="text-secondary mb-0 fs-5">Language:</p>

                  <select className="form-select bg-black text-light rounded-0">
                    <option>English</option>
                    <option>Italian</option>
                    <option>Spanish</option>
                    <option>German</option>
                    <option>Russian</option>
                    <option>Chinese</option>
                  </select>
                </div>

                <hr />
              </div>

              <div>
                <p className="text-secondary fs-5">Maturity Settings:</p>

                <p className="bg-secondary rounded-1 d-inline text-light p-1">
                  ALL MATURITY RATINGS
                </p>

                <p className="small my-3">
                  Show titles of <strong>all maturity ratings</strong> for this
                  profile.
                </p>

                <button className="btn btn-dark border border-secondary rounded-0 my-2 px-4 text-secondary">
                  EDIT
                </button>

                <hr />
              </div>

              <div>
                <p className="text-secondary fs-5">Autoplay controls</p>

                <div className="form-check">
                  <input
                    className="form-check-input bg-dark border-secondary"
                    type="checkbox"
                    defaultChecked
                  />
                  <label className="form-check-label">
                    Autoplay next episode in a series on all devices.
                  </label>
                </div>

                <div className="form-check mb-4">
                  <input
                    className="form-check-input bg-dark border-secondary"
                    type="checkbox"
                    defaultChecked
                  />
                  <label className="form-check-label">
                    Autoplay previews while browsing on all devices.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-12 col-sm-3">
            <button className="btn btn-dark border border-secondary rounded-0 my-2 px-4 text-secondary w-100">
              SAVE
            </button>
          </div>

          <div className="col-12 col-sm-4">
            <button className="btn btn-dark border border-secondary rounded-0 my-2 px-4 text-secondary w-100">
              CANCEL
            </button>
          </div>

          <div className="col-12 col-sm-5">
            <button className="btn btn-dark border border-secondary rounded-0 my-2 px-4 text-secondary w-100 text-nowrap">
              DELETE PROFILE
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
