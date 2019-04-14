import React from 'react';
import { Header, Segment } from 'semantic-ui-react'

const THActivity = () => {
    return(
        <div>
            <Header attached='top' content='Recent Activity' />
            <Segment attached>
                <p>Recent Activity</p>
            </Segment>
        </div>
    )
}

export default THActivity;