import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import List from './Components/List';
import Question from './Components/question';
import Video from './Components/Player';


const App = () => {
    const [listofstudents, setlistofstudents] =  useState([]);
    const [listofquestions, setlistofquestions] = useState([]);
    const [namea,setnamea] = useState("null");
    useEffect(() => {
        axios.get('http://localhost:3000/candidates').then((res)=>{
            setlistofstudents(res.data);
        }).catch((e)=>{
            console.log(e);
        })
        axios.get('http://localhost:3000/questions').then((res)=>{
            setlistofquestions(res.data);
        });
    },[namea]);

    const clickdesiredvideo = (name:any) =>{
        setnamea(name)
   }


    return(
        console.log(namea),
        <div className="First">
            <div></div>
            <div>
            <List list={listofstudents} handeling={clickdesiredvideo}/>
            </div>
            <div>
            <Question questionabc={listofquestions} state={namea}/>
            <Video  state={namea}/>  
            </div>
            <div></div>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));


