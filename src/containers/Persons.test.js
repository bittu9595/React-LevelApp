import { shallow } from "enzyme"
import Persons from "./Persons"

describe('Person.js',()=> {
    it('renders Persons',()=> {
        const comp = shallow(<Persons/>);
        expect(comp.find('input')).toHaveLength(1);
    });
    it('simulate in Persons',()=> {
       const testChange = jest.fn();
        const comp = shallow(<Persons change = {testChange}/>);
        comp.find('#input1').simulate('change',{
            target: {
                value: 'testinput'
            }
        });

        expect(testChange).toBeCalledWith('testinput');
        
    });
    it('simulate in Persons with input value as test',()=> {
        const testChange = jest.fn();
         const comp = shallow(<Persons change = {testChange}/>);
         comp.find('#input1').simulate('change',{
             target: {
                 value: 'test'
             }
         });
 
         expect(testChange).toBeCalledWith('test');
         
     });
})