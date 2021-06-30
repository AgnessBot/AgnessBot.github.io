import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, Link as LinkRouter } from 'react-router-dom';
const Link = ({ isNavLink, to, activeClassName, isExternalLink, ...props }) => {
    const LinkComponent = isNavLink ? NavLink : LinkRouter;
    return isExternalLink ? (
        <a href={to} target="_blank" rel="noopener noreferrer" {...props} />
    ) : (
        <LinkComponent
            {...props}
            to={to}
            {...(isNavLink && { activeClassName })}
        />
    );
};
Link.propTypes = {
    isNavLink: PropTypes.bool.isRequired,
    to: PropTypes.string.isRequired,
    activeClassName: PropTypes.string,
    isExternalLink: PropTypes.bool.isRequired,
    label: PropTypes.string,
};
export default Link;
