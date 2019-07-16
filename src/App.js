import React from "react";
import "./App.styles";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component";
import AboutPage from "./pages/about-page/about-page.component";
import BlogPage from "./pages/blog-page/blog-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";
import ResumePage from "./pages/resume-page/resume-page.component";
import WelcomePage from "./pages/welcome-page/welcome-page.component";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import { AppContainer, PageContainer } from "./App.styles";
import RoundedButton from "./components/rounded-button/rounded-button.component";

import { Link, Element } from "react-scroll";

function App(props) {
  return (
    <AppContainer>
      <PageContainer name="page" className="element" id="containerElement">
        <Element name="home" />
        <Link
          activeClass="active"
          to="detailContainer"
          spy={true}
          smooth={true}
          duration={800}
          containerId="containerElement"
        >
          <Navbar />
        </Link>
        <Route component={HomePage} />{" "}
        <Element
          style={{ width: "100%", display: "flex", alignItems: "center" }}
          name="detailContainer"
        >
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/resume" component={ResumePage} />{" "}
          </Switch>
        </Element>
      </PageContainer>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        containerId="containerElement"
      >
        <RoundedButton />
      </Link>
      <Footer />
    </AppContainer>
  );
}

export default App;
