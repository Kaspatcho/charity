import React from 'react';

export default function Progress({ value, max=1, warningZone= 0.4, dangerZone = 0.7, mustGrow=false, children }) {
    let width = `${value / max * 100}%`
    let backgroundWidth = `${100 - (value / max * 100)}%`
    let className = 'bg-success'
    let backgroundColor = 'darkgreen'
    let percentage = value / max
    let inZone = (a, b) => a > b
    if(mustGrow) {
        inZone = (a, b) => a < b;
        [ warningZone, dangerZone ] = [ 1 - warningZone, 1 - dangerZone ]
    }

    if(inZone(percentage, warningZone)) {
        className = 'bg-warning'
        backgroundColor = 'darkgoldenrod'
    }

    if(inZone(percentage, dangerZone)) {
        className = 'bg-danger'
        backgroundColor = 'darkred'
    }

    return (
        <div className="progress">
            <div className={`progress-bar ${className}`} role="progressbar" style={{ width }}><b>{ children }</b></div>
            <div className="progress-bar" role="progressbar" style={{ width: backgroundWidth, backgroundColor }}></div>
        </div>
    );
}