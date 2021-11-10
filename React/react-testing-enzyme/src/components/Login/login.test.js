import React from "react"
import { mount, shallow } from "enzyme"
import Login from "./Login"

describe('<Login /> with no props', () => {
    const container = shallow(<Login />);
    it('should match the snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });

    it('should have an email field', () => {
        expect(container.find('input[type="email"]').length).toEqual(1);
    });

    it('should have proper props for email field', () => {
        expect(container.find('input[type="email"]').props()).toEqual({
            className: 'mx-auto my-2',
            onBlur: expect.any(Function),
            placeholder: 'email',
            type: 'email',
        });
    });

    it('should have a password field', () => { /* Similar to above */ });
    it('should have proper props for password field', () => { /* Trimmed for less lines to read */ });
    it('should have a submit button', () => { /* */ });
    it('should have proper props for submit button', () => { /* */ });
});

describe('<Login /> with other props', () => {
    const initialProps = {
        email: 'acesmndr@gmail.com',
        password: 'notapassword',
    };
    const container = shallow(<Login {...initialProps} />);

    it('should have proper props for email field', () => {
        expect(container.find('input[type="email"]').props()).toEqual({
            className: 'mx-auto my-2',
            onBlur: expect.any(Function),
            placeholder: 'email',
            type: 'email',
        });
    });

    it('should have proper props for password field', () => {
        expect(container.find('input[type="password"]').props()).toEqual({
            className: 'my-2',
            onChange: expect.any(Function),
            type: 'password',
            value: 'notapassword',
        });
    });

    it('should have proper props for submit button', () => { /* */ });


});

describe('Testing fields...', () => {
    const container = shallow(<Login />);
    it('should set the password value on change event with trim', () => {
        container.find('input[type="password"]').simulate('change', {
            target: {
                value: 'somenewpassword  ',
            },
        });
        expect(container.find('input[type="password"]').prop('value')).toEqual(
            'somenewpassword',
        );
    });

    it('should call the dispatch function and disable the submit button on button click', () => {
        container.find('input[type="button"]').simulate('click');
        expect(
            container.find('input[type="button"]').prop('disabled'),
        ).toBeTruthy();
        expect(initialProps.dispatch).toHaveBeenCalledTimes(1);
    });
});

describe('<Login /> test effect hooks', () => {
    const container = mount(<Login />);
  
    it('should have the login disabled by default', () => {
      expect(
        container.find('input[type="button"]').prop('disabled'),
      ).toBeTruthy();
    });
  
    it('should have the login enabled with valid values', () => {
      container.find('input[type="password"]').simulate('change', {
        target: {
          value: 'validpassword',
        },
      });
      expect(container.find('input[type="button"]').prop('disabled')).toBeFalsy();
    });
  
    it('should have the login disabled with invalid values', () => {
      container.find('input[type="email"]').simulate('blur', { /* */ });
      expect(
        container.find('input[type="button"]').prop('disabled'),
      ).toBeTruthy();
    });
  });

