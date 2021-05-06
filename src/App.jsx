import logo from './logo.svg';
import './App.css';
import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import s from './App.module.sass'
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {NotFound} from "./pages/NotFound";
import {Movie} from "./Components/Movie";

function App() {
    const classContainer = s.container + " " + s.content;
    return (
        <>
            <Router>
                <Header/>
                <main className={classContainer}>
                    <Switch>
                        <Route exact path={'/'}>
                            <Home/>
                        </Route>

                        <Route path={'/about'} component={About}/>
                        <Route path={'/contacts'} component={Contact}/>
                        <Route path={'/movies/:title'} component={Movie}/>
                        <Route component={NotFound}/>
                    </Switch>
                </main>
                <Footer/>
            </Router>
        </>
    )
        ;
}

export default App;
