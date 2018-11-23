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

    handleTabChange = (title) => {
        const tabs = this.state.tabs;

        tabs.map((tab, index) => {
            if (tab.title == title) {
                tab.active = true
            } else {
                tab.active = false
            }
        })

        this.setState({ tabs });
    }

    render() {
        return (
            <div className="dashboard">
                <TabNav handleClick={(title) => this.handleTabChange(title)} tabs={this.state.tabs} />
            </div>
        )
    }
}

export default Dashboard;