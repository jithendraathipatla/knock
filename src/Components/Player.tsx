import React,{useEffect, useState} from 'react';
import Comments from './Comments';
import axios from 'axios';

const Player = (props:any) => {
    const [listofvideos, setlistofvideos] = useState([])
    console.log(props.state);
    useEffect(() => {
        axios.get('http://localhost:3000/applications').then((res)=>{
            setlistofvideos(res.data);
        });
    }, [props.state]);
    const videos = () => {
       const abcd = listofvideos.filter((item:any)=>{
        return (item.id === props.state);
       })
       return  abcd.map((item:any)=>{
          console.log(item)
          return item.videos.map((items:any, i:any)=>{
             return(
                 <div key={i}>
                  <video width="320" height="240" controls>
               <source src={items.src} type="video/mp4"/>
             <source src={items.src} type="video/ogg"/>
                    </video>
                 </div>
             )
          })
      })

    }

    return (
        <div className="Player">
             {videos()}
            <Comments/>
        </div>
    );
};

export default Player;