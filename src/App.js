import React, { useRef, lazy, Suspense } from 'react';
// import { motion, useSpring } from "framer-motion"
import { Switch, Route } from 'react-router-dom';
import Spinner from './components/spinner/spinner.component';
import Background from './components/background/background.component';
import Navbar from './components/navbar/navbar.component';
import {
  FooterDesktop,
  // FooterMobile
} from './components/footer/footer.component';
import CitySvg from './components/CitySvg/CitySvg.component';
import welcomeGreetings from './components/welcome-greetings/welcome-greetings.component';
import HomePage from './pages/home-page/home-page.component';
import AboutPage from './pages/about-page/about-page.component';
import NotePage from './pages/note-page/note-page.component';
import ContactPage from './pages/contact-page/contact-page.component';
import ResumePage from './pages/resume-page/resume-page.component';
import WelcomePage from './pages/welcome-page/welcome-page.component';
import { AppContainer, PageContainer } from './App.styles';

const CV = lazy(() => import('./pages/cv-full/cv-full.component'));
const NotFoundPage = lazy(() => import('./pages/not-found-page/not-found-page.component'));

const cvRoutes = [
  { path: '/', component: WelcomePage, exact: true },
  { path: '/about', component: AboutPage, exact: true },
  { path: '/note', component: NotePage, exact: true },
  { path: '/contact', component: ContactPage, exact: true },
  { path: '/resume', component: ResumePage, exact: true },
];

for (let i = 1; i < cvRoutes.length; i++) {
  cvRoutes[i].prevPath = cvRoutes[i - 1].path;
  if (i < cvRoutes.length - 1) {
    cvRoutes[i].nextPath = cvRoutes[i + 1].path;
  }
}

function App(props) {
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  const RouteInCV = cvRoute => (
    <Route
      exact
      path={cvRoute.path}
      render={props => <cvRoute.component executeScroll={executeScroll} {...props} />}
    />
  );

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/cv" component={CV} />
        <Route exact path="/spinner" component={Spinner} />
        <Route exact path="/city" component={CitySvg} />
        <Route exact path="/banner" component={welcomeGreetings} />
        {['/', '/about', '/note', '/contact', '/resume'].includes(window.location.pathname) && (
          <AppContainer>
            <Background />
            <PageContainer>
              <Navbar />
              <Route component={HomePage} />
              <span ref={myRef} />
              <Switch>
                {console.log('a')}
                {cvRoutes.map(cvRoute => (
                  <RouteInCV key={cvRoute.path} {...cvRoute} />
                ))}
              </Switch>
            </PageContainer>
            <FooterDesktop />
          </AppContainer>
        )}
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default App;
