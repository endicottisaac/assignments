import axios from "axios";
import React, {useState, useEffect} from "react";

const PageContext = React.createContext()

function PageContextProvider(props){
    
    const [thing, setThing] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })

    const [edit, setEdit] = useState({
        title: "New Title",
        description: "New Description",
        imgUrl: "New Img Url"
    });

    const [allUglyThings, setAllUglyThings] = useState([])

    const [formSubmitted, setFormSubmitted] = useState(false);


    const handleChange = (e) => {
        const {name, value} = e.target
        setThing(prevThing => ({
            ...prevThing,
            [name]: value
        }))
    }

    const submitThing = () => {
        const newThing = {
            title: thing.title,
            description: thing.description,
            imgUrl: thing.imgUrl
        }
        console.log("submited")
        axios.post("https://api.vschool.io/isaacendicott/thing", newThing)
        .then(res => {
            console.log(res)
            setFormSubmitted(true)
        })
        .catch(err => {
            console.log(err)
        })
        setThing({
            title: "",
            description: "",
            imgUrl: ""
        })


    }

    const onDelete = (id) => {
        axios.delete(`https://api.vschool.io/isaacendicott/thing/${id}` )
        .then(res => {
            console.log(res)
            setFormSubmitted(true)
            
        })
        .catch(err => {
                console.log(err)
        })
    }

    const editThing = (id, edit) => {
        setEdit(edit);
        axios.put(`https://api.vschool.io/isaacendicott/thing/${id}`, edit)
            .then(res => {
                console.log(res);
                setFormSubmitted(true);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        axios.get("https://api.vschool.io/isaacendicott/thing")
        .then(response => {
            console.log(response.data)
            setAllUglyThings(response.data)
            setFormSubmitted(false)
        })
        .catch(error => {
            console.error("Error Fetching Things:", error)
        })
    }, [formSubmitted]);

    return (
        <PageContext.Provider value={{
            handleChange: handleChange,
            thing: thing,
            submitThing: submitThing,
            allUglyThings: allUglyThings,
            onDelete: onDelete,
            editThing: editThing,
            edit: edit
        }}>
            {props.children}
        </PageContext.Provider>
    )


}


export {PageContext,PageContextProvider}

