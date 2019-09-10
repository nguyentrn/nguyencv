import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Element } from "react-scroll";

import Spinner from "./components/spinner/spinner.component";
import Background from "./components/background/background.component";
import Navbar from "./components/navbar/navbar.component";
import {
  FooterDesktop,
  FooterMobile
} from "./components/footer/footer.component";
import CitySvg from "./components/CitySvg/CitySvg.component";
import welcomeGreetings from "./components/welcome-greetings/welcome-greetings.component";
import LinkWithScroll from "./components/link-with-scroll/link-with-scroll.component";
import HomePage from "./pages/home-page/home-page.component";
import AboutPage from "./pages/about-page/about-page.component";
import NotePage from "./pages/note-page/note-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";
import ResumePage from "./pages/resume-page/resume-page.component";
import WelcomePage from "./pages/welcome-page/welcome-page.component";
import PageWrapper from "./hoi/page-wrapper/page-wrapper.component";
import { AppContainer, PageContainer, NavPageContainer } from "./App.styles";
import "./stylestest.css";

const CV = lazy(() => import("./pages/cv-full/cv-full.component"));
const NotFoundPage = lazy(() =>
  import("./pages/not-found-page/not-found-page.component")
);

const routes = [
  { path: "/", component: WelcomePage, exact: true },
  { path: "/about", component: AboutPage, exact: true },
  { path: "/note", component: NotePage, exact: true },
  { path: "/contact", component: ContactPage, exact: true },
  { path: "/resume", component: ResumePage, exact: true }
];

function App(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/cv" component={CV} />
        <Route exact path="/spinner" component={Spinner} />
        <Route exact path="/city" component={CitySvg} />
        <Route exact path="/banner" component={welcomeGreetings} />

        {routes.map(route => (
          <Route
            exact
            path={route.path}
            render={() => (
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
                                  <Route component={route.component} />
                                </Switch>
                              </CSSTransition>
                            </TransitionGroup>
                          )}
                        />
                      </Element>{" "}
                      <FooterMobile />
                    </PageWrapper>{" "}
                  </PageContainer>
                </NavPageContainer>
                <FooterDesktop />
              </AppContainer>
            )}
          />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default App;

// import React, { lazy, Suspense } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import { Element } from "react-scroll";

// import Spinner from "./components/spinner/spinner.component";
// import Background from "./components/background/background.component";
// import Navbar from "./components/navbar/navbar.component";
// import Footer from "./components/footer/footer.component";
// import LinkWithScroll from "./components/link-with-scroll/link-with-scroll.component";
// import HomePage from "./pages/home-page/home-page.component";
// import AboutPage from "./pages/about-page/about-page.component";
// import NotePage from "./pages/note-page/note-page.component";
// import ContactPage from "./pages/contact-page/contact-page.component";
// import ResumePage from "./pages/resume-page/resume-page.component";
// import WelcomePage from "./pages/welcome-page/welcome-page.component";
// import PageWrapper from "./hoi/page-wrapper/page-wrapper.component";
// import { AppContainer, PageContainer, NavPageContainer } from "./App.styles";
// import "./stylestest.css";

// const CV = lazy(() => import("./pages/cv-full/cv-full.component"));
// const NotFoundPage = lazy(() =>
//   import("./pages/not-found-page/not-found-page.component")
// );

// const routes = [
//   { path: "/", component: WelcomePage, exact: true },
//   { path: "/about", component: AboutPage, exact: true },
//   { path: "/note", component: NotePage, exact: true },
//   { path: "/contact", component: ContactPage, exact: true },
//   { path: "/resume", component: ResumePage, exact: true }
// ];

// function App(props) {
//   return (
//     <Suspense fallback={<Spinner />}>
//       <Switch>
//         <Route exact path="/cv" component={CV} />
//         <Route exact path="/spinner" component={Spinner} />
//         <Route path="/404" component={NotFoundPage} />

//         <AppContainer>
//           <Background />
//           <NavPageContainer>
//             <LinkWithScroll>
//               <Navbar />
//             </LinkWithScroll>

//             <PageContainer
//               name="page"
//               className="element"
//               id="containerElement"
//             >
//               <Element name="home" />
//               <Route component={HomePage} />
//               <PageWrapper>
//                 <Element name="detailContainer">
//                   <Route
//                     render={({ location }) => (
//                       <TransitionGroup>
//                         <CSSTransition
//                           key={location.key}
//                           classNames="fade"
//                           timeout={600}
//                         >
//                           <Switch location={location}>
//                             {routes.map((route, id) => (
//                               <Route
//                                 exact
//                                 path={route.path}
//                                 component={route.component}
//                               />
//                             ))}
//                             <Redirect from={location.pathname} to="404" />
//                             <Route component={HomePage} />
//                           </Switch>
//                         </CSSTransition>
//                       </TransitionGroup>
//                     )}
//                   />
//                 </Element>
//               </PageWrapper>
//             </PageContainer>
//           </NavPageContainer>
//           <Footer />
//         </AppContainer>
//       </Switch>
//     </Suspense>
//   );
// }

// export default App;
