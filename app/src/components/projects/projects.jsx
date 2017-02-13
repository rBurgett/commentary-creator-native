import React from 'react';

const Projects = ({ projects, newProject, loadProject }) => {

    const styles = {
        headerFlexContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
        },
        newProjectButton: {
            marginTop: 20
        }
    };

    const newProjectClicked = e => {
        e.preventDefault();
        newProject();
    };

    const projectItems = [...projects]
        .sort((a, b) => {
            const dateA = a.dateAccessed;
            const dateB = b.dateAccessed;
            return dateA === dateB ? 0 : dateA > dateB ? -1 : 1;
        })
        .map(p => {

            const onClick = e => {
                e.preventDefault();
                loadProject(p);
            };

            return (
                <a key={p.id} href="#" className="list-group-item" onClick={onClick}>
                    {p.name && p.author ? `${p.name}, by ${p.author}` : p.name}
                </a>
            );
        });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div style={styles.headerFlexContainer}>
                        <h1>Commentaries</h1>
                        <div>
                            <button type="button" style={styles.newProjectButton} className="btn btn-primary" onClick={newProjectClicked}><i className="fa fa-plus"></i> New Commentary</button>
                        </div>
                    </div>
                    <div className="list-group">
                        {projectItems}
                    </div>
                </div>
            </div>
        </div>
    );
};
Projects.propTypes = {
    projects: React.PropTypes.arrayOf(React.PropTypes.object),
    newProject: React.PropTypes.func,
    loadProject: React.PropTypes.func
};

export default Projects;
