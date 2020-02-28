import React from 'react';
import Listitem from '../Components/Listitem';

const List = (props:any) => {
  
    const displaying = () => {
      return props.list.map((item:any,i:any)=>{
          return(
              <div key={i}>
                <Listitem name={item.name} id={item.applicationId} total={props.handeling}/>
              </div>
          )
      })
    }

    const error = () => {
        return <div>Loading....</div>
    }
    return (
        <div className="main_List">
           <div style={{textAlign:"center",padding:"0px"}}>
               <span>List</span>
            <hr/>
           { props.list.length === 0 ? error() : displaying() }
           </div>
        </div>
    );
};

export default List;