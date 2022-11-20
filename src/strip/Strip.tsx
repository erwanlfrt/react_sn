import React from 'react';
import './Strip.css';
import Tile from '../tile/Tile';
import { CompassSection } from 'boussole/react';
import { Configuration } from 'boussole';

type Props = {
  title: string
  conf: Configuration
  snId: string
}

function Strip (props: Props) {
  const tiles = []
  for (let i = 0; i < 7; i++) {
    tiles.push('tiles n°' + i)
  }
  return (
    <div className="strip-wrapper">
      <h1>{props.title}</h1>
      <CompassSection id={props.snId} conf={props.conf}>
        <div className="strip">
        {
          tiles.map((text, index) => <Tile content={text} customClass={index === 4 ? 'theDefaultOne': ''}></Tile>)
        }
      </div>
      </CompassSection>
    </div>
  )
}

export default Strip;