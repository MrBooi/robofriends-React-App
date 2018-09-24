import{shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component',()=>{
    const mockRobots =[
       { id:1,
        name:'Ayabonga Booi',
        username: 'MrBooi',
        email: 'aya@gmail.com'
    
     }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})