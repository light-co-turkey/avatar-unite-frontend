import React, { useEffect } from "react";

import { ToggleContainer, ProfileBtn, PortfolioBtn, HomeBtn, TextBtn } from "../components/ui/Buttons";

//styles
import Logo from '../assets/avatar-finance-logo.png'
import { ReactComponent as MoonIcon } from '../assets/moon_stars.svg';
import { ReactComponent as SunIcon } from '../assets/sun.svg';
import './views.scss';

const imgStyles = { maxWidth: "1.8rem", maxHeight: "1.8rem", margin: "auto" }

const CNavbar = props => {

  const location = props.location

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const theme = props.theme;
  const toggleTheme = props.toggleTheme;
  const isLight = theme === 'light';

  const clientLoc = location.pathname

  return (
    <div className="nav-div csticky-top">
      <div className="nav-inner-div">
        <a href="/" className="df">
          <img className="brand" src={Logo} alt="Avatar Logo" />
        </a>

        <div className="avatar-nav">
          <a href="#/">
            <ProfileBtn style={imgStyles} fill={clientLoc === "/" ? "#65A3FF" : "white"} />
            <p className="f-3 td-n" style={clientLoc === "/" ? { color: "#65A3FF" } : { color: "white" }}>find/profile</p>
          </a>
          <a href="#/unite">
            <HomeBtn style={imgStyles} fill={clientLoc === "/unite" ? "#65A3FF" : "white"} />
            <p className="f-3 td-n" style={clientLoc === "/unite" ? { color: "#65A3FF" } : { color: "white" }}>unite</p>
          </a>
          <a href="#/stats">
            <PortfolioBtn style={imgStyles} fill={clientLoc === "/stats" ? "#65A3FF" : "white"} />
            <p className="f-3 td-n" style={clientLoc === "/stats" ? { color: "#65A3FF" } : { color: "white" }}>stats</p>
          </a>
        </div>

        <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
          <SunIcon />
          <MoonIcon />
        </ToggleContainer>
      </div>
      <div className="mlr-a bst-i-3 bra-1 brlb-0 brrb-0 df jc-c ai-c h-3 mxw-1200 w-95">
        <TextBtn variant="info" className="plr-3 pbt-1 ml-a mr-3" href="#/testing">Connect</TextBtn>
      </div>
    </div>
  );
}

export default CNavbar