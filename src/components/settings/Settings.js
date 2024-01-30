import React, { useState, useContext, useRef, useEffect } from 'react';
import SettingsHeader from './SettingsHeader';
import Dashboard from '../Dashboard';


export default class Settings extends React.Component {
    render() {
        return (
            <>
                {/* <Dashboard/> */}
            <div className="Settings">
                    <SettingsHeader />
                <div className="Settings-body">
                </div>
            </div>
            </>
        )
    }
};

