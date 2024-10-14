import React from 'react';

export default function Progress({ value, max=1, warningZone= 0.5, dangerZone = 0.3, mustGrow=false, children }) {
    let width = `${value / max * 100}%`
    let backgroundWidth = `${100 - (value / max * 100)}%`
    let className = 'bg-success'
    let backgroundColor = 'darkgreen'
    let percentage = value / max
    if((percentage < warningZone && mustGrow) || (percentage > warningZone && !mustGrow)) {
        className = 'bg-warning'
        backgroundColor = 'darkgoldenrod'
    }

    if((percentage < dangerZone && mustGrow) || (percentage > dangerZone && !mustGrow)) {
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