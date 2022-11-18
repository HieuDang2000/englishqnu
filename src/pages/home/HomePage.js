import React from 'react';
import Header from './header';
import BodyContent from './bodyContent';
import Footer from './footer';

class HomePage extends React.Component {
    render() { 
        return ( 
            <div className='content'>
            <Header user = {this.props.user} logout = {this.props.logout}/>
            <BodyContent />
            <Footer />
            </div>
         );
    }
}
 
export default HomePage;