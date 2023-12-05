import axios from "axios";
import React, {useState, useEffect} from "react";
import he from 'he';

const TriviaContext = React.createContext();

const TriviaContextProvider = (props) =>{

    const [homeTrivia, setHomeTrivia] = useState({
        question: "",
        correct_answer: ""
    });
    
    const [trueOrFalse, setTrueOrFalse] = useState({
        question: "",
        correct_answer: ""
    })

    const [customRequest, setCustomRequest] = useState({
        category: "any",
        totalTrivia: "1"
    })

    const [customTrivia, setCustomTrivia] = useState([{
        question: "", 
        correct_answer: ""
    }])


    //Home page useEffect
    useEffect(() => {
        const apiUrl = 'https://opentdb.com/api.php?amount=1';
    
        axios.get(apiUrl)
          .then(response => {
            console.log(response.data.results[0]);
            console.log(response.data.results[0].question);
            console.log(response.data.results[0].correct_answer);
            const newQuestion = he.decode(response.data.results[0].question,)
            const newAnswer = he.decode(response.data.results[0].correct_answer)
            setHomeTrivia(prevTrivia => ({ 
                ...prevTrivia, 
                question: newQuestion,
                correct_answer: newAnswer
            }))
            setCustomTrivia(() => (response.data.results))
          })
          .catch(error => {
            console.error('Error making GET request:', error);
          });
      }, []); 
    

      //True or false function and useEffect 
      const newTrueOrFalse = () => {
        const apiUrl = 'https://opentdb.com/api.php?amount=1&type=boolean'

        axios.get(apiUrl) 
            .then(response => {
                console.log(response.data.results[0]);
                console.log(response.data.results[0].question);
                console.log(response.data.results[0].correct_answer);
                const newQuestion = he.decode(response.data.results[0].question,)
                const newAnswer = he.decode(response.data.results[0].correct_answer)
                setTrueOrFalse(() => ({
                    question: newQuestion,
                    correct_answer: newAnswer
                }))
                setTrueOrFalseRequest(false)
            })
      }


      //Custom Trivia functions and useEffect 
      const handleChange = (e) => {
        const {name, value} = e.target
        setCustomRequest(prevRequest => ({
            ...prevRequest, 
            [name]: value
        }))
      }

      const submitCustomTrivia = () => {
            if(customRequest.category === "any") {
                axios.get(`https://opentdb.com/api.php?amount=${customRequest.totalTrivia}`)
                    .then(response => {
                        console.log(response.data.results)
                        setCustomTrivia(() => (response.data.results))
                    })
            } else {
                axios.get(`https://opentdb.com/api.php?amount=${customRequest.totalTrivia}&category=${customRequest.category}`)
                    .then(response => {
                        console.log(response.data.results)
                        setCustomTrivia(() => (response.data.results))
                    })
            }
      }

    return (
        <TriviaContext.Provider value={{
            homeTrivia: homeTrivia,
            trueOrFalse: trueOrFalse,
            newTrueOrFalse: newTrueOrFalse,
            handleChange: handleChange,
            submitCustomTrivia: submitCustomTrivia,
            customTrivia: customTrivia
        }}>
            {props.children}
        </TriviaContext.Provider>
    )
}
export {TriviaContext,TriviaContextProvider}



