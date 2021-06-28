import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";

import Header from './sections/header'
import Promo from './sections/promo'
import About from './sections/about'
import Plans from './sections/plans'
import FAQ from './sections/faq'
import Locations from './sections/locations'
import Feedback from './sections/feedback'
import Footer from './sections/footer'

const App = () => (
    <div className="app">
        <Header className="widgetMock"/>
        <Promo className="widgetMock"/>
        <About className="widgetMock"/>
        <Plans className="widgetMock"/>
        <FAQ className="widgetMock"/>
        <Locations className="widgetMock"/>
        <Feedback className="widgetMock"/>
        <Footer className="widgetMock"/>
    </div>
);

export default App;
