import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './components/css/index.css';
// import "bootstrap/dist/css/bootstrap.min.css";


// 실질적으로 사용할 컴포넌트 불러오기
import Home from './components/Home';
import Footer from './components/Footer';
import Building from './components/Building';
import Buy from './components/Buy';
import Location from './components/location/Location';
import QnA from './components/qna/QnA';
import Navigation from "./components/Navigation";
import LoginForm from './components/LoginForm';
import Bulletin from './components/bulletin/Bulletin1';
import BulletinArticle from  './components/bulletin/Bulletin_article';
import * as serviceWorker from './serviceWorker';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                <Navigation />
                    <div className="route">
                        <Route path="/" exact component={Home} />
                        <Route path="/location" exact component={Location}/>
                        <Route path="/building" exact component={Building}/>
                        <Route path="/buy" exact component={Buy}/>
                        <Route path="/qna" exact component={QnA}/>
                        <Route path="/bulletin" exact component={Bulletin}/>
                        <Route path="/bulletin/:id" component={BulletinArticle}/>
                        <Route path="/login" exact component={LoginForm}/>
                    </div>
                </Router>  
                <div>
                  <Footer />
                </div>
            </div>
            
            
        );
    }
}
ReactDOM.render(<Index />, document.querySelector('#root'));
serviceWorker.unregister();



