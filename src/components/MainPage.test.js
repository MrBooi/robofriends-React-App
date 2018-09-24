import{shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(()=>{
  const mockProps ={
      onRequestRobots:jest.fn(),
      robots:[],
      searchField:'',
      isPending:false,
  }
  wrapper = shallow(<MainPage {...mockProps}/>)
})

it('expect to render MainPage component',()=>{
   expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly',()=>{
    const mockProps2 ={
        onRequestRobots:jest.fn(),
        robots:[{
            id:3,
            name:'John',
            email:'John@gmail.com'
        }],
        searchField:'a',
        isPending:false,
    }
  const wrapper2 = shallow(<MainPage {...mockProps2}/>)
    expect(wrapper.instance().filterRobots()).toEqual([]);
    expect(wrapper2.instance().filterRobots()).toEqual([]);
})


it('filters robots correctly 2',()=>{
    const mockProps3 ={
        onRequestRobots:jest.fn(),
        robots:[{
            id:3,
            name:'John',
            email:'John@gmail.com'
        }],
        searchField:'a',
        isPending:false,
    }
    const filteredRobots = []
  const wrapper3 = shallow(<MainPage {...mockProps3}/>)
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
})

it('filters robots correctly',()=>{
    const mockProps4 ={
        onRequestRobots:jest.fn(),
        robots:[{
            id:3,
            name:'John',
            email:'John@gmail.com'
        }],
        searchField:'a',
        isPending:true,
    }
  const wrapper4 = shallow(<MainPage {...mockProps4}/>)
    expect(wrapper.instance().filterRobots()).toEqual([]);
    expect(wrapper4.instance().filterRobots()).toEqual([]);
})