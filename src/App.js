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
import { AppContainer, PageContainer, NavPageContainer } from "./App.styles";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Link, Element } from "react-scroll";
import PageWrapper from "./hoi/page-wrapper/page-wrapper.component";
import "./stylestest.css";
import { useWindowSize } from "react-use";

const Wdow = () => {
  const { width, height } = useWindowSize();

  return { width, height };
};

// const routes = [
//   { path: "/", component: <WelcomePage />, exact: true },
//   { path: "/about", component: <AboutPage />, exact: true },
//   { path: "/note", component: <BlogPage />, exact: true },
//   { path: "/contact", component: <ContactPage />, exact: true },
//   { path: "/resume", component: <ResumePage />, exact: true }
// ];

function App(props) {
  return (
    <AppContainer>
      <NavPageContainer>
        {Wdow().width < 1024 ? (
          <Link
            activeClass="active"
            to="detailContainer"
            offset={-55}
            spy={true}
            smooth={true}
            duration={800}
            containerId="containerElement"
          >
            <Navbar />
          </Link>
        ) : (
          <Link
            activeClass="active"
            to="detailNavigate"
            offset={-100}
            spy={true}
            smooth={true}
            duration={800}
            containerId="navigate"
          >
            <Navbar />
          </Link>
        )}

        <PageContainer name="page" className="element" id="containerElement">
          <Element name="home" />
          <Route component={HomePage} />
          <PageWrapper>
            <Element name="detailContainer">
              <Route
                render={({ location }) => (
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      classNames="fade"
                      timeout={600}
                    >
                      <Switch location={location}>
                        {/* {routes.map((route, id) => (
                          <Route {...route} />
                        ))} */}
                        <Route exact path="/" component={WelcomePage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/note" component={BlogPage} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Route exact path="/resume" component={ResumePage} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                )}
              />
            </Element>
          </PageWrapper>
        </PageContainer>
      </NavPageContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
