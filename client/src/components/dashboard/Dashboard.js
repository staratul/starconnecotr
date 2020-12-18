import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';

const Dashboard = ({ getCurrentProfile, deleteAccount, auth: {user}, profile: {profile, loading} }) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
        <i className="fa fa-user" aria-hidden="true"></i> Welcome { user && user.name }
        </p>
        {profile !== null ? <Fragment>
                <DashboardActions />
                {profile.education ? <Fragment>
                    <Education education={profile.education} />
                </Fragment> : ''}
                {profile.experience ? <Fragment>
                    <Experience experience={profile.experience} />
                </Fragment> : ''}
                <div className="my-2">
                    <button className="btn btn-danger" onClick={() => deleteAccount()}>
                        <i className="fas fa-minus"></i> Delete My Account
                    </button>
                </div>
            </Fragment> : <Fragment>
            <p>You have not yet setup a profile, please add some info</p>    
            <Link to="/create-profile" className="btn btn-primary my-1">
                Create Profile
            </Link>
        </Fragment>}
    </Fragment>;
}

Dashboard.propTypes = {
    getCurrentProfile: propTypes.func.isRequired,
    deleteAccount: propTypes.func.isRequired,
    auth: propTypes.object.isRequired,
    profile: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
