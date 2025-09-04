import Draggable, {DraggableCore} from 'react-draggable'
import React from 'react';
import ReactDOM from 'react-dom';
import { useRef } from 'react';

const clothes = ["testi"]; //get list of files in wardrobe assets

export default function Wardrobe() {
    return (
        <>
            <h1>Wardrobe page</h1>
            <div className="wardrobe">
                {clothes.map((item) => (
                    <Clothing key={item} name={item}/>
                ))}
            </div>
        </>
    );
}

function Clothing( { name } ) {
    const nodeRef = useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className="clothing">
                <img draggable={false} src={`/wardrobe/${name}.png`}></img>
            </div>
        </Draggable>
    );
}