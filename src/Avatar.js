
import React, { Component } from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

class Avatar extends Component{
    
    constructor(){
        super();
        this.state = {
            name : " Welcome to Avatar World "
        }
    }

    nameChange(){
        this.setState({
            name : " Subscribe to my Channel "
        })
    }
    
    render(){
    
        const avatarListArray = [
        {
            id:1,
            name:"Deep",
            work:"Web Developer"
        },
        {
            id:2,
            name:"Rahul",
            work:"Web Designer"
        },
        {
            id:3,
            name:"Nikhil",
            work:"React Developer"
        },
        {
            id:4,
            name:"Sumit",
            work:"Angular Developer"
        }
        
    ]

    const arrayavatarcard = avatarListArray.map (( avatarcard, i ) =>
    {
        return <Avatarlist key={i} id={avatarListArray[i].id}  
                                name={avatarListArray[i].name} 
                                work={avatarListArray[i].work} />
    })

    return(
        <div className="mainpage">
        <h1 className="tc "> {this.state.name} </h1>
        {arrayavatarcard}
        <div>
        <button onClick= { () => this.nameChange() }> Subscribe </button>
        </div>
        </div>
    )
}

}

// const Avatar = () => {

//     const avatarListArray = [
//         {
//             id:1,
//             name:"Deep",
//             work:"Web Developer"
//         },
//         {
//             id:2,
//             name:"Rahul",
//             work:"Web Designer"
//         },
//         {
//             id:3,
//             name:"Nikhil",
//             work:"React Developer"
//         },
//         {
//             id:4,
//             name:"Sumit",
//             work:"Angular Developer"
//         }
        
//     ]

//     const arrayavatarcard = avatarListArray.map (( avatarcard, i ) =>
//     {
//         return <Avatarlist id={avatarListArray[i].id}  
//                                 name={avatarListArray[i].name} 
//                                 work={avatarListArray[i].work} />
//     })

//     return(
//         <div className="mainpage">
//         <h1 className="tc "> Welcome to Avatar World </h1>
//         {arrayavatarcard}
//         <button> Subscribe </button>
//         </div>
//     )

    // return(
    //     <div>
    //     <h1 className="tc "> Welcome to Avatar World </h1>
    //     <Avatarlist id={avatarListArray[0].id}  
    //                     name={avatarListArray[0].name} 
    //                     work={avatarListArray[0].work} />

    //     <Avatarlist id={avatarListArray[1].id}  
    //                     name={avatarListArray[1].name} 
    //                     work={avatarListArray[1].work} />
                        
    //     <Avatarlist id={avatarListArray[2].id}  
    //                     name={avatarListArray[2].name} 
    //                     work={avatarListArray[2].work} />
                        
    //     <Avatarlist id={avatarListArray[3].id}  
    //                     name={avatarListArray[3].name} 
    //                     work={avatarListArray[3].work} />
                        
    //     <button> Subscribe </button>
    //     </div>
    // )


    // return(
    //     <div>
    //     <h1 className="tc "> Welcome to Avatar World </h1>
    //     <Avatarlist id="1"  name="Deep" work="Web Developer"/>
    //     <Avatarlist id="2"  name="Rahul" work="Web Designer"/>
    //     <Avatarlist id="3"  name="Nilhil" work="React Developer"/>
    //     <Avatarlist id="4"  name="Sumit" work="Angular Developer"/>
    //     <button> Subscribe </button>
    //     </div>
    // )
// }

export default Avatar;