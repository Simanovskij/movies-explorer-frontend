import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Tech';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main({ isLoggedIn }) {
  return (<>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
