import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="http://goodneighborhood.kr">
          <img src="/images/home-icon.svg"  alt=""/>
          <span>HOME</span>
        </a>
        <a href="http://goodneighborhood.kr">
          <img src="/images/search-icon.svg" alt=""/>
          <span>SEARCH</span>
        </a>
        <a href="http://goodneighborhood.kr">
          <img src="/images/watchlist-icon.svg" alt=""/>
          <span>WATCHLIST</span>
        </a>
        <a href="http://goodneighborhood.kr">
          <img src="/images/original-icon.svg" alt=""/>
          <span>ORIGINAL</span>
        </a>
        <a href="http://goodneighborhood.kr">
          <img src="/images/movie-icon.svg" alt=""/>
          <span>MOVIES</span>
        </a>
        <a href="http://goodneighborhood.kr">
          <img src="/images/series-icon.svg" alt=""/>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/joshua.png" alt=""/>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;

  @media (max-width: 860px) {
    display: none;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
        transition: 0.3s;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
