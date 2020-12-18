import React, { Fragment } from 'react'
import propTypes from 'prop-types'

const ProfileAbout = ({ profile: {
    bio,
    skills,
    user
} }) => <div className="profile-about bg-light p-2">
            {bio && (
                <Fragment>
                    <h2 className="text-primary">{user && user.name.trim().split(' ')[0]}'s Bio</h2>
                    <p>
                    {bio}
                    </p>
                </Fragment>
            )}
          <div className="line"></div>
          <h2 className="text-primary">Skill Set</h2>
          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="p-1">
                <i className="fa fa-check" aria-hidden="true"></i> {skill}
              </div>
            ))}
          </div>
        </div>;

ProfileAbout.propTypes = {
    profile: propTypes.object.isRequired
}

export default ProfileAbout
