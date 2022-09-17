import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../typings/redux-typings/redux-typings";

const SearchUserCard = () => {
  const { theme } = useSelector((state: State) => state.theme);
  return (
    <div className={`pe-2 ps-2 searchResultCard `}>
      <div className="card d-block shadow-xss rounded-3 overflow-hidden mb-3 searchResultCard-wrapper">
        <div
          className={`card-body d-block w-100 ps-3 pe-3 pb-4 text-center searchResultCard-${theme}`}
        >
          <img
            src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80s"
            alt="avater"
            className="image"
          />
          <div className="clearfix w-100"></div>
          <h4 className="fw-700 font-xsss mt-3 mb-0 font">Victor Exrixon </h4>
          <p className="fw-500 font-xssss text-grey-500 mt-0 mb-3 font">
            @macale343
          </p>
          <a
            href="/defaultmember"
            className="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white"
          >
            ADD FRIEND
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchUserCard;
