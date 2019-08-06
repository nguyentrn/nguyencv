import React, { lazy, Suspense } from "react";
import "./App.styles";
import Spinner from "./components/spinner/spinner.component";
import Background from "./components/background/background.component";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component";
import AboutPage from "./pages/about-page/about-page.component";
import BlogPage from "./pages/blog-page/blog-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";
import ResumePage from "./pages/resume-page/resume-page.component";
import WelcomePage from "./pages/welcome-page/welcome-page.component";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
// import CV from "./pages/cv-full/cv-full.component";
import { AppContainer, PageContainer, NavPageContainer } from "./App.styles";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Element } from "react-scroll";
import PageWrapper from "./hoi/page-wrapper/page-wrapper.component";
import "./stylestest.css";
import LinkWithScroll from "./components/link-with-scroll/link-with-scroll.component";

const CV = lazy(() => import("./pages/cv-full/cv-full.component"));

const routes = [
  { path: "/", component: WelcomePage, exact: true },
  { path: "/about", component: AboutPage, exact: true },
  { path: "/note", component: BlogPage, exact: true },
  { path: "/contact", component: ContactPage, exact: true },
  { path: "/resume", component: ResumePage, exact: true }
];

function App(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/cv" component={CV} />
        <Route exact path="/spinner" component={Spinner} />

        <AppContainer>
          <Background />
          <NavPageContainer>
            <LinkWithScroll>
              <Navbar />
            </LinkWithScroll>

            <PageContainer
              name="page"
              className="element"
              id="containerElement"
            >
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
                            {routes.map((route, id) => (
                              <Route
                                exact
                                path={route.path}
                                component={route.component}
                              />
                            ))}
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
      </Switch>
    </Suspense>
  );
}

export default App;
