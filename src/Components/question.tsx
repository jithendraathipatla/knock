import React from 'react';

const question = (props:any) => {

    const questions = () => {
        return props.questionabc.map((item:any,i:any)=>{
            return(
                <div key={i}>
                  {item.question}
                </div>
            )
        })
    }
    return (
        <div className="Question">
            {questions()}
        </div>
    );
};

export default question;