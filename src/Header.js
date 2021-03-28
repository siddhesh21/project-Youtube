import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MicIcon from "@material-ui/icons/Mic";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/YouTube_light_logo_%282017%29.svg/1024px-YouTube_light_logo_%282017%29.svg.png"
          alt=""
          className="header__logo"
        />
      </div>
      <div className="header__input">
        <input className="header__inputText" placeholder="Search" type="text" />
        <SearchIcon className="header__inputButton" />
      </div>
      <MicIcon className="header__inputMic" />

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
