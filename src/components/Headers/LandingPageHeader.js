import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/Moon-Sky-Blue-Wallpaper.jpeg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
      <div className="fog-low">
        <img alt="..." src={require("assets/img/fog-low.png")} />
      </div>
      <div className="fog-low right">
        <img alt="..." src={require("assets/img/fog-low.png")} />
      </div>
      <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
      />
      <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1 className="presentation-title">Anthony Sanderson</h1>
            <h2>Full Stack Web Developer</h2>
            <br />
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
