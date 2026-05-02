import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

export const MainSettings = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <main className="mb-4 bg-light">
      <div className="container-fluid w-75 text-light">
        <div>
          <h1 className="text-secondary">Account</h1>
          <hr className="border-1 border-secondary" />
        </div>

        <div className="row">
          <div className="col-12 col-lg-4">
            <h5 className="text-secondary">MEMBERSHIP & BILLING</h5>
            <button className="border bg-secondary-subtle p-2 text-black mb-4">
              Cancel Membership
            </button>
          </div>

          <div className="col-12 col-lg-8">
            <div className="d-flex justify-content-between flex-wrap">
              <div>
                <p className="fw-bold mb-0 text-black">student@strive.school</p>
                <p className="text-secondary mb-0">Password: *********</p>
                <p className="text-secondary mb-0">Phone: 321 044 1279</p>
              </div>

              <div className="text-primary text-md-end">
                <a href="#" className="d-block">
                  Change account email
                </a>
                <a href="#" className="d-block">
                  Change password
                </a>
                <a href="#" className="d-block">
                  Change phone number
                </a>
              </div>
            </div>

            <hr className="border-1 border-secondary" />

            <div className="d-flex justify-content-between flex-wrap">
              <p className="fw-bold text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-paypal"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.35.35 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91q.57-.403.993-1.005a4.94 4.94 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.7 2.7 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.7.7 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016q.326.186.548.438c.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.87.87 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.35.35 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32z" />
                </svg>
                <span className="fst-italic">Paypal</span> admin@strive.school
              </p>

              <div className="text-primary text-md-end">
                <a href="#" className="d-block">
                  Update payment info
                </a>
                <a href="#" className="d-block">
                  Billing details
                </a>
              </div>
            </div>

            <hr className="border-1 border-secondary" />

            <div className="text-primary text-md-end">
              <a href="#" className="d-block">
                Redeem gift card or promo code
              </a>
              <a href="#" className="d-block">
                Where to buy gift cards
              </a>
            </div>
          </div>
        </div>

        <hr className="border-1 border-secondary" />

        <div className="row">
          <div className="col-12 col-lg-4">
            <h5 className="text-secondary">PLAN DETAILS</h5>
          </div>

          <div className="col-12 col-lg-8 d-flex justify-content-between">
            <p className="fw-bold text-black">
              Premium
              <span className="border fw-normal px-1 border-black border-1 rounded-1 mx-1">
                ULTRA <strong>HD</strong>
              </span>
            </p>

            <a href="#" className="text-primary">
              Change plan
            </a>
          </div>
        </div>

        <hr className="border-1 border-secondary" />

        <div className="row">
          <div className="col-12 col-lg-4">
            <h5 className="text-secondary">SETTINGS</h5>
          </div>

          <div className="col-12 col-lg-8 text-primary">
            <a href="#" className="d-block">
              Parental controls
            </a>
            <a href="#" className="d-block">
              Test participation
            </a>
            <a href="#" className="d-block">
              Manage download devices
            </a>
            <a href="#" className="d-block">
              Activate a device
            </a>
            <a href="#" className="d-block">
              Recent device streaming activity
            </a>
            <a href="#" className="d-block">
              Sign out of all devices
            </a>
          </div>
        </div>

        <hr className="border-1 border-secondary" />

        <div className="row">
          <div className="col-12 col-lg-4">
            <h5 className="text-secondary">MY PROFILE</h5>
          </div>

          <div className="col-12 col-lg-8 d-flex justify-content-between">
            <p className="fw-bold text-black">
              <img
                src="/src/assets/avatar.png"
                alt="avatar"
                width="40"
                className="rounded me-2"
              />
              Strive Student
            </p>

            <div className="text-primary text-md-end">
              <a href="#" className="d-block">
                Manage profiles
              </a>
              <a href="#" className="d-block">
                Add profile email
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4 offset-lg-4 text-primary">
            <a href="#" className="d-block">
              Language
            </a>
            <a href="#" className="d-block">
              Playback settings
            </a>
            <a href="#" className="d-block">
              Subtitle appearance
            </a>
          </div>

          <div className="col-md-4 text-primary">
            <a href="#" className="d-block">
              Viewing activity
            </a>
            <a href="#" className="d-block">
              Ratings
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
