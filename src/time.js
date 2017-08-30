import React from 'react';


const Time = ({newTime}) => (
    <div>{newTime}</div>
);



export default Time;















































// const Time = React.createClass({
//   setTime: function(){

//     var currentdate = new Date();
//     var hours = currentdate.getUTCHours() + parseInt(this.props.UTCOffset);    

//       if( hours >= 24 ){ hours -= 24; }
//       if( hours < 0   ){ hours += 12; }

//       hours = hours + "";
//       if( hours.length == 1 ){ hours = "0" + hours; }

//       var minutes = currentdate.getUTCMinutes();

//       minutes = minutes + "";
//       if( minutes.length == 1 ){ minutes = "0" + minutes; }

//       var seconds = currentdate.getUTCSeconds();
//       console.log(hours, minutes, seconds)
//       this.setState({
//         hours: hours,
//         minutes: minutes,
//         seconds: seconds
//       });
//   },
//   componentWillMount: function(){
//     this.setTime();
//   },
//   componentDidMount: function(){
//      window.setInterval(function () {
//       this.setTime();
//     }.bind(this), 1000);
//   },
//   render: function() {

//     return(
//       <div className="time" ref="time">
//         <span className="city-time">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>
//       </div>
//     )
//   }
// });

