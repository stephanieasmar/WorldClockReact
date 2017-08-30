import React from 'react';
import City from './city.js';
import Time from './time.js';


const Clock = ({name, time}) => (
    <div>
        <p className="city">
            <City name={name}/>
        </p>
        <p className="currentTime">
            <Time newTime={time} />
        </p>
    </div>
);



export default Clock;


