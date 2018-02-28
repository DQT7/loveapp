import React from 'react';
import FDJournal from '../../RTracker/FDJournal';
import RLissues from '../../RTracker/RLissues'

class Splash extends React.Component{

    render(){
        return (
            <div>
                <FDJournal token={this.props.sessionToken}/>
                <RLissues token={this.props.sessionToken}/>
            </div>
        )
    }
}

export default Splash;