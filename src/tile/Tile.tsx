import React from 'react';
import './Tile.css';
import { BoussoleElement } from 'boussole/react';


interface Props {
  content: string;
  customClass: string
}

function Tile (props: Props) {
  return (
    <BoussoleElement>
      <div className={props.customClass + ' tile'} >
        {props.content}
      </div>
    </BoussoleElement>
  )
}

export default Tile;