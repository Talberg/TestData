import React from 'react'
import './CardDisplay.scss'
import API from '../../utils/API'

function CardDisplay(props){
    let rollFunction = API.roll
    let currentCard = props.rooms.currentCard
    let closedCard = {...props.rooms.currentCard , display:'hidden'}
    function closeCard (){
        //map through all the players and check if the email is the same 
        let playerKeys =Object.keys(props.rooms.players)

        // player trait - or + player
        // do a currentCard.action.map()
       

        
        

        


        console.log(props.user.user.email)
        playerKeys.map( player=>{
            if (props.user.user.email === props.rooms.players[player].email) {
               let character = props.rooms.players[player].character 
               let might = character.might[character.mightIndex]
               let newItemArray = props.rooms.players[player].item
               let newKnowledge = props.rooms.players[player].character.knowledgeIndex
               let newMight = props.rooms.players[player].character.mightIndex
               let newSpeed = props.rooms.players[player].character.speedIndex
               let newSanity = props.rooms.players[player].character.sanityIndex
               
               
               
               
               console.log(newKnowledge)
               
               
                currentCard.action.map(action =>{
                    console.log(rollFunction(9))
                    newMight = (parseInt(newMight) + parseInt(1))
                        console.log(newMight)
                        let mightIndex = newMight
                        console.log(mightIndex)
                    
                    if (action === 'item'){
                        console.log('made it to the item') 
                        newItemArray.push(currentCard)
                    }
                    let actionArray = action.split('-')
                    if(actionArray[0]==='knowledge'){
                      
                        if(actionArray[1]==='Up'){
                            console.log(` ${player} ${actionArray[0]} goes up by  ${actionArray[2]}`)
                            //make knowledge on the players character needs to go up 
                            newKnowledge = (parseInt(newKnowledge) + parseInt(actionArray[2]))
                            console.log(newKnowledge)
                            let knowledgeIndex = newKnowledge
                            console.log(knowledgeIndex)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                            knowledgeIndex:knowledgeIndex,
                                            mightIndex:mightIndex
                                        }
                                        } }
            
                                }
                            )

                            console.log(props.rooms.players[player].character.knowledgeIndex)
                           

                        }
                        if(actionArray[1]==='Down'){
                            console.log(` ${player} knowledge goes down by  ${actionArray[2]}`)
                        }
                    }
                    if(actionArray[0]==='might'){
                      
                        if(actionArray[1]==='Up'){
                            console.log(` ${player} ${actionArray[0]} goes up by  ${actionArray[2]}`)
                            //make knowledge on the players character needs to go up 
                            newMight = (parseInt(newMight) + parseInt(actionArray[2]))
                            console.log(newMight)
                            let mightIndex = newMight
                            console.log(mightIndex)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                            mightIndex:mightIndex
                                        }
                                        } }
            
                                }
                            )

                            console.log(props.rooms.players[player].character.mightIndex)
                           

                        }
                        if(actionArray[1]==='Down'){
                            console.log(` ${player} knowledge goes down by  ${actionArray[2]}`)
                        }
                    }
                    if(actionArray[0]==='speed'){
                      
                        if(actionArray[1]==='Up'){
                            console.log(` ${player} ${actionArray[0]} goes up by  ${actionArray[2]}`)
                            //make knowledge on the players character needs to go up 
                            newSpeed = (parseInt(newSpeed) + parseInt(actionArray[2]))
                            console.log(newSpeed)
                            let speedIndex = newSpeed
                            console.log(speedIndex)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           speedIndex:speedIndex
                                        }
                                        } }
            
                                }
                            )

                            console.log(props.rooms.players[player].character.knowledgeIndex)
                           

                        }
                        if(actionArray[1]==='Down'){
                            console.log(` ${player} knowledge goes down by  ${actionArray[2]}`)
                        }
                    }
                    if(actionArray[0]==='sanity'){
                      
                        if(actionArray[1]==='Up'){
                            console.log(` ${player} ${actionArray[0]} goes up by  ${actionArray[2]}`)
                            //make knowledge on the players character needs to go up 
                            newSanity = (parseInt(newSpeed) + parseInt(actionArray[2]))
                            console.log(newSanity)
                            let sanityIndex = newSanity
                            console.log(sanityIndex)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:sanityIndex
                                        }
                                        } }
            
                                }
                            )

                            console.log(props.rooms.players[player].character.knowledgeIndex)
                           

                        }
                        if(actionArray[1]==='Down'){
                            console.log(` ${player} knowledge goes down by  ${actionArray[2]}`)
                        }
                    }
                    if(action === 'graveDirt'){
                        //player might roll of 4 or greater is needed to gain 1 might
                        //if roll < 4 then  take one point of physical damage every start of the turn.  do the item function here 
                        //physical damage selector component needs to be built out 
                      
                       let mightRoll =  rollFunction(might)
                       if(mightRoll < 4){
                           //make the player take damage 1 physical damage 
                       }
                       else{
                        newMight = (parseInt(newMight) + parseInt(1))
                        console.log(newMight)
                        let mightIndex = newMight
                        console.log(mightIndex)
                        props.changeState(
                            {
                                ...props.rooms,
                                currentCard :closedCard,
                                players: {...props.rooms.players , 
                                    [player] : {...props.rooms.players[player],  item:newItemArray, 
                                    character:{
                                        ...props.rooms.players[player].character,
                                        mightIndex:mightIndex
                                    }
                                    } }
        
                            }
                        )

                       }
                       


                    




                    }
                    else{
                        props.changeState(
                            {
                                ...props.rooms,
                                currentCard :closedCard,
                              
        
                            }
                        )

                    }

                    console.log(actionArray[1])
                    console.log(actionArray[2])
                    console.log(actionArray[3])
                    console.log(newKnowledge)

                    
                  
                }
        
                )
                let playerObj = props.rooms.players[player]
                 //if there is a function on the card then it should run here and then 
             
               
               
               
                // here is where the item will be put into the players array 
               
            }
        }

             
        )
        
       
    }
    console.log(currentCard)
    return(<div className={`cardDisplay ${currentCard.display}`} >
        <div className='cardType'>
            <h2> {currentCard.type} </h2>
        </div>
        <hr></hr>
        <div className='cardTitle'>
            <h2> {currentCard.title} </h2>
        </div>
        <div className='cardFlavorText'>
<p>{currentCard.flavorText}</p>
        </div>
        <div className='cardDescription'>
<p>{currentCard.description}</p>
        </div>
        {/* show this if there is a roll that is needed from the player */}
        <div className='rollButton'> 
        <button>Roll</button>
        </div>
        <div className='acceptButton'>
            <button onClick={closeCard}>ACCEPT</button>
        </div>
    </div>)
}



export default CardDisplay