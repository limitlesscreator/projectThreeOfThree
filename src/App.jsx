import './App.css';
import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {NotFound} from "./pages/NotFound";
import s from './App.module.sass'
import {Category} from "./pages/Category";
import {Resipe} from "./pages/Resipe";
function App() {
    return (
        <>
            <Router basename={"/projectThreeOfThree"}>
                <Header/>
                <main className={s.classContainer}>
                    <Switch>
                        <Route exact path={'/'}>
                            <Home/>
                        </Route>
                            <Route path={'/category/:name'} component={Category}/>
                            <Route path={'/meal/:id'} component={Resipe}/>
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
