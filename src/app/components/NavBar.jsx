import React from 'react';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                
                <div className="navbar-end">
                    <a className="btn btn-primary btn-outline">FAQ</a>
                    <a className="btn btn-primary btn-outline">Learn</a>
                    <a className="btn btn-primary btn-outline">Logout</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;