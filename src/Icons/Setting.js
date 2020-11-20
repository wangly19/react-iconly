import React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Setting = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2.5 2)'>
      <path
        d='M10.2,20H8.807a2.066,2.066,0,0,1-2.125-2.05A1.9,1.9,0,0,0,4.8,16.13a1.58,1.58,0,0,0-.9.23,2.163,2.163,0,0,1-1.084.3A2.122,2.122,0,0,1,1,15.62l-.7-1.2a2,2,0,0,1-.021-2.05,2.108,2.108,0,0,1,.817-.789,1.653,1.653,0,0,0,.644-.64,1.782,1.782,0,0,0,.19-1.365A1.837,1.837,0,0,0,1.071,8.44,2.045,2.045,0,0,1,.314,5.61L1,4.43a2.123,2.123,0,0,1,2.882-.76,1.894,1.894,0,0,0,.9.224A1.959,1.959,0,0,0,6.446,2.98a1.538,1.538,0,0,0,.236-.88A1.788,1.788,0,0,1,6.968,1.04,2.2,2.2,0,0,1,8.776,0h1.441a2.154,2.154,0,0,1,1.82,1.04A1.781,1.781,0,0,1,12.312,2.1a1.545,1.545,0,0,0,.235.88,1.964,1.964,0,0,0,1.672.914,1.926,1.926,0,0,0,.9-.224,2.111,2.111,0,0,1,2.872.76l.684,1.18a2.027,2.027,0,0,1-.756,2.831,1.829,1.829,0,0,0-.853,1.138,1.771,1.771,0,0,0,.2,1.362,1.571,1.571,0,0,0,.634.64,2.307,2.307,0,0,1,.828.789,2.031,2.031,0,0,1-.02,2.05l-.715,1.2a2.1,2.1,0,0,1-2.893.74,1.621,1.621,0,0,0-.9-.23,1.9,1.9,0,0,0-1.891,1.82A2.061,2.061,0,0,1,10.2,20ZM9.512,7.18a2.87,2.87,0,0,0-2.9,2.83,2.763,2.763,0,0,0,.849,2,2.93,2.93,0,0,0,2.053.821A2.822,2.822,0,0,0,11.55,8.006,2.877,2.877,0,0,0,9.512,7.18Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2.5 2)'>
      <path
        d='M2.9,5.65A2.853,2.853,0,0,1,0,2.83,2.861,2.861,0,0,1,2.9,0a2.825,2.825,0,1,1,0,5.65'
        transform='translate(6.61 7.18)'
        fill={color}
      />
      <path
        d='M18.73,12.37a2.3,2.3,0,0,0-.828-.79,1.547,1.547,0,0,1-.634-.64,1.822,1.822,0,0,1,.654-2.5,2.027,2.027,0,0,0,.756-2.83l-.685-1.18a2.112,2.112,0,0,0-2.872-.76,1.973,1.973,0,0,1-2.575-.69,1.546,1.546,0,0,1-.235-.88,1.778,1.778,0,0,0-.276-1.06A2.152,2.152,0,0,0,10.217,0H8.776A2.195,2.195,0,0,0,6.967,1.04,1.785,1.785,0,0,0,6.681,2.1a1.546,1.546,0,0,1-.235.88,1.963,1.963,0,0,1-2.565.69A2.124,2.124,0,0,0,1,4.43L.314,5.61a2.044,2.044,0,0,0,.756,2.83,1.834,1.834,0,0,1,.664,2.5,1.634,1.634,0,0,1-.644.64,2.118,2.118,0,0,0-.818.79,2,2,0,0,0,.02,2.05L1,15.62a2.134,2.134,0,0,0,1.819,1.04,2.161,2.161,0,0,0,1.083-.3,1.586,1.586,0,0,1,.9-.23,1.892,1.892,0,0,1,1.88,1.82A2.07,2.07,0,0,0,8.807,20H10.2a2.068,2.068,0,0,0,2.115-2.05A1.908,1.908,0,0,1,14.2,16.13a1.63,1.63,0,0,1,.9.23,2.1,2.1,0,0,0,2.892-.74l.715-1.2a2.018,2.018,0,0,0,.02-2.05'
        fill={color}
        opacity={opacity}
      />
    </g>
  )

  const Light = () => (
    <g transform='translate(2.5 1.5)'>
      <path
        d='M17.528,5.346l-.622-1.08a1.913,1.913,0,0,0-2.609-.7h0a1.9,1.9,0,0,1-2.609-.677,1.831,1.831,0,0,1-.256-.915h0A1.913,1.913,0,0,0,9.519,0H8.265a1.9,1.9,0,0,0-1.9,1.913h0A1.913,1.913,0,0,1,4.448,3.8a1.831,1.831,0,0,1-.915-.256h0a1.913,1.913,0,0,0-2.609.7l-.668,1.1a1.913,1.913,0,0,0,.7,2.609h0a1.913,1.913,0,0,1,.957,1.657,1.913,1.913,0,0,1-.957,1.657h0a1.9,1.9,0,0,0-.7,2.6h0l.632,1.089A1.913,1.913,0,0,0,3.5,15.7h0a1.895,1.895,0,0,1,2.6.7,1.831,1.831,0,0,1,.256.915h0a1.913,1.913,0,0,0,1.913,1.913H9.519a1.913,1.913,0,0,0,1.913-1.9h0a1.9,1.9,0,0,1,1.913-1.913,1.95,1.95,0,0,1,.915.256h0a1.913,1.913,0,0,0,2.609-.7h0l.659-1.1a1.9,1.9,0,0,0-.7-2.609h0a1.9,1.9,0,0,1-.7-2.609,1.876,1.876,0,0,1,.7-.7h0a1.913,1.913,0,0,0,.7-2.6h0Z'
        transform='translate(0.779 0.778)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='2.636'
        cy='2.636'
        r='2.636'
        transform='translate(7.039 7.753)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
    </g>
  )

  const Broken = () => (
    <g transform='translate(2.5 2)'>
      <path
        d='M6.175,17.365a.991.991,0,0,0-.143-.527,1.112,1.112,0,0,0-1.493-.4,2.736,2.736,0,0,1-3.6-.949L.329,14.449A2.6,2.6,0,0,1,1.3,10.935a1.1,1.1,0,0,0,.4-.386,1.043,1.043,0,0,0,.179-.85A1.07,1.07,0,0,0,1.345,9,2.6,2.6,0,0,1,.374,5.49a.785.785,0,0,1,.5-.327.8.8,0,0,1,.589.115A.745.745,0,0,1,1.687,6.3a1.05,1.05,0,0,0,.4,1.449,2.586,2.586,0,0,1-.036,4.47,1.051,1.051,0,0,0-.405,1.45l.621,1.045a1.067,1.067,0,0,0,.662.5,1.091,1.091,0,0,0,.831-.118,2.648,2.648,0,0,1,1.322-.342,2.667,2.667,0,0,1,2.7,2.635,1.086,1.086,0,0,0,1.1,1.063l-.009.017a.787.787,0,0,1,.678.383.75.75,0,0,1,0,.764A.789.789,0,0,1,8.874,20,2.668,2.668,0,0,1,6.175,17.365Zm5.028.079a2.628,2.628,0,0,1,1.346-2.227,2.758,2.758,0,0,1,2.648-.031,1.093,1.093,0,0,0,.827.114,1.124,1.124,0,0,0,.666-.5l.611-1.046a1.033,1.033,0,0,0,.113-.806,1.059,1.059,0,0,0-.509-.644,2.571,2.571,0,0,1-.98-1.045A2.6,2.6,0,0,1,16.9,7.747a.811.811,0,0,1,1.062.29.754.754,0,0,1-.27,1.045,1.1,1.1,0,0,0-.4.387,1.038,1.038,0,0,0-.113.809,1.066,1.066,0,0,0,.509.649,2.6,2.6,0,0,1,.935,3.6l-.611,1.045a2.735,2.735,0,0,1-3.6.949,1.1,1.1,0,0,0-1.1-.01,1.05,1.05,0,0,0-.54.932.794.794,0,0,1-1.574,0Zm-4.1-5.1a3.237,3.237,0,0,1-.737-3.6A3.375,3.375,0,0,1,9.494,6.7H9.5a3.392,3.392,0,0,1,2.38.961A3.235,3.235,0,0,1,12.876,10a3.291,3.291,0,0,1-2.082,3.057,3.442,3.442,0,0,1-3.689-.71ZM7.7,10a1.8,1.8,0,1,0,1.8-1.757A1.78,1.78,0,0,0,7.7,10Zm9-4.726A1.112,1.112,0,0,0,15.2,4.892a2.754,2.754,0,0,1-2.644-.029A2.624,2.624,0,0,1,11.2,2.644a1.05,1.05,0,0,0-.306-.775,1.1,1.1,0,0,0-.782-.323H8.883a1.108,1.108,0,0,0-.786.323,1.056,1.056,0,0,0-.312.775,2.581,2.581,0,0,1-1.343,2.23,2.709,2.709,0,0,1-2.651-.017l-.036-.035A.755.755,0,0,1,3.5,3.768a.8.8,0,0,1,1.08-.246,1.151,1.151,0,0,0,.539.148,1.109,1.109,0,0,0,.789-.282,1.064,1.064,0,0,0,.353-.745A2.665,2.665,0,0,1,8.883,0h1.232a2.667,2.667,0,0,1,2.7,2.635.989.989,0,0,0,.144.526,1.084,1.084,0,0,0,.662.5,1.114,1.114,0,0,0,.831-.106,2.735,2.735,0,0,1,3.6.949.772.772,0,0,1-.288,1.045.8.8,0,0,1-.392.1A.794.794,0,0,1,16.691,5.279Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2.5 1.5)'>
      <path
        d='M17.528,5.346l-.622-1.08a1.913,1.913,0,0,0-2.609-.7h0a1.9,1.9,0,0,1-2.609-.677,1.831,1.831,0,0,1-.256-.915h0A1.913,1.913,0,0,0,9.519,0H8.265a1.9,1.9,0,0,0-1.9,1.913h0A1.913,1.913,0,0,1,4.448,3.8a1.831,1.831,0,0,1-.915-.256h0a1.913,1.913,0,0,0-2.609.7l-.668,1.1a1.913,1.913,0,0,0,.7,2.609h0a1.913,1.913,0,0,1,.957,1.657,1.913,1.913,0,0,1-.957,1.657h0a1.9,1.9,0,0,0-.7,2.6h0l.632,1.089A1.913,1.913,0,0,0,3.5,15.7h0a1.895,1.895,0,0,1,2.6.7,1.831,1.831,0,0,1,.256.915h0a1.913,1.913,0,0,0,1.913,1.913H9.519a1.913,1.913,0,0,0,1.913-1.9h0a1.9,1.9,0,0,1,1.913-1.913,1.95,1.95,0,0,1,.915.256h0a1.913,1.913,0,0,0,2.609-.7h0l.659-1.1a1.9,1.9,0,0,0-.7-2.609h0a1.9,1.9,0,0,1-.7-2.609,1.876,1.876,0,0,1,.7-.7h0a1.913,1.913,0,0,0,.7-2.6h0Z'
        transform='translate(0.779 0.778)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='2.636'
        cy='2.636'
        r='2.636'
        transform='translate(7.039 7.753)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
    </g>
  )

  switch (set) {
    case 'bold':
      return <Bold />
    case 'bulk':
      return <Bulk />
    case 'broken':
      return <Broken />
    case 'two-tone':
      return <TwoTone />
    default:
      return <Light />
  }
}
Setting.displayName = 'IconlySetting'
Setting.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Setting)
