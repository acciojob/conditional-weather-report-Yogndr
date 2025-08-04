import React from 'react'

function WeatherDisplay(props) {
    const temp=props.info.temperature
    const condition=props.info.conditions
    const color=temp>20? "red":"blue"
  return (
    <>
    <p>Temperature: <span style={{color:color}}>{temp}</span></p>
    <p>Conditions: {condition}</p>
    {/* <div>
    if({props.temeperature>20})
    <p><span style={{color:"red"}}>{props.temperature}</span></p>
    else
    <p><span style={{color:"blue"}}>{props.temperature}</span></p>
    </div> */}
    </>
  )
}

export default WeatherDisplay
