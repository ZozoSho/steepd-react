import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Customize from './CustomizeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { SLIDES } from '../shared/slides';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: SLIDES
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        };

        return(
            <React.Fragment>
                <Header />
                <TransitionGroup>
                    <CSSTransition  key={this.props.location.key} classNames="page" timeout={200}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/customize' render={() => <Customize flavors={this.props.flavors} />} />
                            <Redirect to='/home' />
                        </Switch>            
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </React.Fragment>
        );
    };
};

export default withRouter(Main);