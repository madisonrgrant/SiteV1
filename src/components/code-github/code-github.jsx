import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './code-github.css';

class CodeGithubComponent extends Component {

    render() {
        return (
            <div className="code-github">
              <p className="headline">Code, code, and more code.</p>
                <Card>
                  <CardHeader
                    subtitle="Github Repository"
                    title="madisonrgrant/sitev1"
                    avatar="github.png"
                  />
                <CardText>
                        This application is made with React and Material UI. Check out the code on Github.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/madisonrgrant/sitev1" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;
