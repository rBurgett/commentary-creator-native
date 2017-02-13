import React from 'react';
import { connect } from 'react-redux';
import Projects from './components/projects';
import Project from './components/project';

const App = ({ projectId }) => {

    let activePage;

    if(projectId) {
        activePage = <Project />;
    } else {
        activePage = <Projects />;
    }

    return (
        <div>
            <div>{activePage}</div>
        </div>
    );
};
App.propTypes = {
    projectId: React.PropTypes.string
};

const AppContainer = connect(
    ({ projectState }) => {
        return {
            projectId: projectState._id
        };
    }
)(App);

export default AppContainer;
