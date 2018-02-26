import React from 'react';
import FDJournal from '../../RTracker/FDJournal';

class Splash extends React.Component{

    render(){
        return (
            <div>
                <FDJournal token={this.props.sessionToken}/>
            </div>
        )
    }
}

export default Splash;