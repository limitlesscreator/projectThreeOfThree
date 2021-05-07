
import './App.css';
import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {NotFound} from "./pages/NotFound";
import {Movie} from "./Components/Movie";
import s from './App.module.sass'
import {Category} from "./pages/Category";
function App() {
    // const classContainer = s.container + " " + s.content;
    return (
        <>
            <Router>
                <Header/>
                <main className={s.classContainer}>
                    <Switch>
                        <Route exact path={'/'}>
                            <Home/>
                        </Route>

                            <Route path={'/about'} component={About}/>
                            <Route path={'/contacts'} component={Contact}/>
                            <Route path={'/category/:name'} component={Category}/>
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
