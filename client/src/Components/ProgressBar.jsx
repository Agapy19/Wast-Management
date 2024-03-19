import React from 'react';

function ProgressBar({ progress, name }) {
    const getColor = (progress) => {
        if (progress < 30) {
            return 'red';
        } else if (progress < 70) {
            return '#D19C13'; 
        } else {
            return 'green'; 
        }
    };

    const progressBarStyle = {
        width: `${progress}%`,
        backgroundColor: getColor(progress),
        height: '20px',
        borderRadius: '10px',
    };

    return (
        <div className="progress-bar-container">
            <div className="progress-bar-fill">
                <div className="progress-bar-label">{name}</div>
                <div className="progress-bar-percent">{progress}%</div>
            </div>

            <div className="progress-bar">
                <div className="progress" style={progressBarStyle}></div>
            </div>
        </div>
    );
}

export default ProgressBar;
