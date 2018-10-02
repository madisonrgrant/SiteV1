import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import './programming.css';

class ProgrammingComponent extends Component {

    render() {
        const style = {
            width: '100%',
            display: 'inline-block',
            background: 'white'
        };
        return (
            <div className="programming">
              <p className="headline"> So what do I know?</p>
                    <Paper zDepth={3} style={style}>
                        <div className="console-content">
                            <ul>
                            <li>✔️JavaScript, Ruby, HTML5, CSS3</li>
                            <li>✔️React, Node.js, Ruby on Rails, jQuery, Bootstrap</li>
                            <li>✔️PostgreSQL</li>
                            <li>✔️RSpec</li>
                            <li>✔️Git, GitHub, npm, Heroku, REST APIs, CORS, Atom</li>
                            <li>✔️Object-Oriented Programming, MVC, Pair Programming</li>
                            </ul>
                        </div>
                    </Paper>
                </div>
        );
    }
}

export default ProgrammingComponent;
