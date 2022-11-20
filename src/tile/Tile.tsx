import React from 'react';
import './Tile.css';
import { CompassElement } from 'boussole/react';


interface Props {
  content: string;
  customClass: string
}

function Tile (props: Props) {
  return (
    <CompassElement>
      <div className={props.customClass + ' tile'} >
        {props.content}
      </div>
    </CompassElement>
  )
}

export default Tile;