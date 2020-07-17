import React, { Component } from 'react'
import './Avatar.css'
import Avatarlist from './Avatarlist'



 class Avatar extends Component{
     constructor(props) {
         super(props)
     
         this.state = {
              name :"Welcome to Avatar World"
         }
     }
     namechange(){
         this.setState({
            name :"Welcome Homie"
         })
     }
     

     render() {

    const avaratlistarray = [
        {
            
            id: 1 ,
            name:"Udit",
            work:"Python Developer"
        },
        {
            id:2 ,
            name:"Ravi",
            work:"Web Developer"
        },
        {
            id:3 ,
            name:"Nidhi",
            work:" Developer"
        },
        {
            id:4 ,
            name:"Aayushi",
            work:"FrontEnd Developer"
        }
    ]

     
    

   const arrayavaratcard = avaratlistarray.map( (avatarcard,i) =>{
     return    <Avatarlist  key={i} id={avaratlistarray[i].name}
                             name={avaratlistarray[i].name}
                             work={avaratlistarray[i].work}/>

    })

   
    return (
        <div className="mainpage">
            <h1> {this.state.name}</h1>
         {arrayavaratcard}
            <button onClick= {()=>this.namechange() } >Subcribe</button>
            </div>
    )
}
}

export default Avatar
