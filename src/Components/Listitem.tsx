import React from 'react';

const Listitem = (props:any) => {
    return (
        <div className="item" onClick={()=>props.total(props.id)}>
           {props.name}
        </div>
    );
};

export default Listitem;