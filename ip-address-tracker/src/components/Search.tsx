import * as React from "react";
import "../styles/search.scss";
import arrow from "../images/icon-arrow.svg";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISearchProps {}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  return (
    <div className="search">
      <div className="search__input">
        <input type="text" name="ipAddress" id="ipAddress" value="" />
        <button>
          <img src={arrow} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default Search;
