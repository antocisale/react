import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Card from '../Card/Card';
import candies from '../../Images/candies.jpg';
import coffee from '../../Images/coffee.jpg';
import vegetables from '../../Images/vegetables.jpg';


const SwitchComponent = () =>{
    return (
        <Switch className="switch">
            <Route exact path="/">
                <Card HeaderImg={candies} title="It's Candy Time!"></Card>
            </Route>
            <Route path="/card1">
                <Card HeaderImg={vegetables} title="Why vegetables are so important in our diet"></Card>
            </Route>
            <Route path="/card2">
                <Card HeaderImg={coffee} title="Coffee in the morning: good or bad for our health?"></Card>
            </Route>
        </Switch>
    )
}

export default SwitchComponent;