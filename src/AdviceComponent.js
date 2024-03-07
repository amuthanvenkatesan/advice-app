import React,{useState} from "react";

function AdviceComponent(){

    const [state,setState] = useState("Want Some Advices? Here You Go!!");

    async function HandleSubmit(props){

        let url = 'https://api.adviceslip.com/advice';

        let response = await fetch(url,{
            method : "GET"
        });

       let profile = await response.json();
        
       setState(profile.slip.advice);

      
    }

    return(
        <>
        <div className="app">
            <div className="card">
                <h1 className="heading">{state}</h1>
                <button className="btn" onClick={HandleSubmit}> 
                    <span>Give Me Advice!</span>
                </button>
            </div>
        </div>
        </>
    )
}

export default AdviceComponent;