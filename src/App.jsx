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
import {Hero} from "./Components/Hero";
import {FullCard} from "./Components/FullCard";
function App() {
    const data  = [
        {
            title: "Html",
            description: "This is Html"
        },
        {
            title: "Css",
            description: "This is Css"
        },
        {
            title: "Js",
            description: "This is Js"
        },
        {
            title: "React",
            description: "This is React"
        },
    ]
    return (
        <>
            <Router>
                {/*<Header/>*/}
                {/*<main className={s.classContainer}>*/}
                {/*    <Switch>*/}
                {/*        <Route exact path={'/'}>*/}
                {/*            <Home/>*/}
                {/*        </Route>*/}

                {/*            <Route path={'/about'} component={About}/>*/}
                {/*            <Route path={'/contacts'} component={Contact}/>*/}
                {/*            <Route path={'/category/:name'} component={Category}/>*/}
                {/*            <Route path={'/meal'} component={Resipe}/>*/}
                {/*            <Route component={NotFound}/>*/}
                {/*    </Switch>*/}
                {/*</main>*/}
                {/*<Footer/>*/}
                <Route exact path={'/'}>
                    <Hero data={data}/>
                </Route>
                <Route path={'/cards/:title'}>
                    <FullCard data={data}/>
                </Route>
            </Router>
        </>
)
;
}

export default App;
