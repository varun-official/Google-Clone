/** @format */

import React from "react";
import useGoogleSearch from "../components/useGoogleSearch";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import Search from "../components/Search";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Responce from "../responce";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  {
    /**LIVE API CALL */
  }
  const { data } = useGoogleSearch(term);

  {
    /**MOCK Api call */
  }
  const mockdata = Responce;

  //https://developers.google.com/custom-search/v1/using_rest /**to get the app key */
  //https://cse.google.com/cse/create/new /**to get the custom google search engine */
  console.log(data);
  return (
    <div className="searchpage">
      <div className="searchpage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
            className="searchpage__logo"
          />
        </Link>
        <div className="searchpage__headerbody">
          <Search hidebuttons />
          <div className="searchpage__options">
            <div className="searchpage__optionsleft">
              <div className="searchpage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchpage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchpage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchpage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchpage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchpage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchpage__optionsright">
              <div className="searchpage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchpage__option">
                <Link to="/tools">Tolls</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term ? (
        <div className="searchpage__results">
          <p className="searchpage__resultcount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} secounds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchpage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchpage__resulstimage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    ></img>
                  )}
                {item.displayLink}⯆
              </a>
              <a className="searchpage__resulttitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchpage__resultsnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="searchpage__results">
          <p className="searchpage__resultcount">
            About {mockdata?.searchInformation.formattedTotalResults} results (
            {mockdata?.searchInformation.formattedSearchTime} secounds) for
            {term}
          </p>
          <p className="searchpage__resultnote">
            Note:-This is a Mock(demo) Api call.Due to the Api call limit.
            <br />
            if Api limit exceed Mock Api called atomatically and defualt is
            called with india.
          </p>
          {mockdata?.items.map((item) => (
            <div className="searchpage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchpage__resulstimage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    ></img>
                  )}
                {item.displayLink}⯆
              </a>
              <a className="searchpage__resulttitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchpage__resultsnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
