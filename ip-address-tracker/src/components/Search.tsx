import * as React from "react";
import "../styles/search.scss";
import arrow from "../images/icon-arrow.svg";
import pattern from "../images/pattern-bg.png";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISearchProps {}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  return (
    <div className="search" style={{ backgroundImage: `url(${pattern})` }}>
      <div className="search__input">
        <input
          type="text"
          name="ipAddress"
          id="ipAddress"
          value=""
          placeholder="Search for any IP address or domain "
        />
        <button>
          <img src={arrow} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default Search;
