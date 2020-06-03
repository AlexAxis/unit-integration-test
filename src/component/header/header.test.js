import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr } from '../../../Utils';
import Header from './index'

//--- both of this methods work to test
// test();
// it();

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />)
    return component
}


//--- describe = it groups all tests
describe('Header Component', () => {
    describe('Nested', () => {

        let component
        //--- this beforeEach runs everytime before each single test
        beforeEach(() => {
            component = setUp()
        })


        it('It should render without errors', () => {
            //expect(1).toBe(1)
            //expect(1).toBe(3)

            const compo = shallow(<Header />)
            console.log(compo.debug()) // appears the node tree
            const wrapper = compo.find('.headerComponent')
            expect(wrapper.length).toBe(1)
        })

        it('Should render a logo - v1', () => {
            //const component = shallow(<Header />)
            const compo = setUp()
            const logo = compo.find('.logoIMG')
            expect(logo.length).toBe(1)
        })        
        
        it('Should render a logo - v2', () => {
            const logo = component.find(`[data-test='logoIMG']`)
            expect(logo.length).toBe(1)
        })

        it('Should render a logo - v3', () => {
            const logo = findByTestAtrr(component, 'logoIMG')
            expect(logo.length).toBe(1)
        })
    })
})