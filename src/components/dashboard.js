import React, { Component } from 'react';
import TabNav from './tabNav';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    title: 'Newsletter',
                    active: false,
                    component: <h4>Newsletter</h4>
                },
                {
                    title: 'Requests',
                    active: false,
                    component: <h4>Requests</h4>
                }
            ]
        }
    }
    render() {
        return <TabNav tabs={this.state.tabs} />
    }
}

export default Dashboard;