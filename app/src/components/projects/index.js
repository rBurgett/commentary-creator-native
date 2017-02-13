import { connect } from 'react-redux';
import co from 'co';
import { promiseAlert } from 'promise-alert';
import Projects from './projects.jsx';
import { createProject } from '../../actions/app-actions';
import { updateProject } from '../../actions/project-actions';

const ProjectsContainer = connect(
    ({ appState }) => {
        return {
            projects: appState.projects
        };
    },
    dispatch => {
        return {
            loadProject(p) {
                console.log(`loadProject ${p._id}`);
                dispatch(updateProject(p));
            },
            newProject() {
                co(function* () {
                    try {
                        const res = yield promiseAlert({
                            title: 'Enter Commentary Name',
                            type: 'input',
                            showCancelButton: true
                        });
                        if(!res) return;
                        const cleanTitle = res.trim();
                        if(!cleanTitle) return;
                        dispatch(createProject(res));
                    } catch(err) {
                        console.error(err);
                    }
                });
            }
        };
    }
)(Projects);

export default ProjectsContainer;
