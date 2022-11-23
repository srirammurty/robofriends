import React from 'react';
import Card from './Card';

const CardList = (props) => {
    /** for testing the error catch by ErrorBoundary 
    if(true){
        throw new Error() ;
    }
    */

    const cardCompp = props.robots.map( (robo, index) => {
        //console.log(robo);
        return (<Card 
                    key={index} 
                    name={robo.name} 
                    email={robo.email} img={`https://robohash.org/${robo.id}?size=275x200&set=set2`} 
                />);
    });
    return (
        <div>
             {cardCompp}
        </div>
      
    );

}
export default CardList;