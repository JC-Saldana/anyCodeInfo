import React from "react"
import { shallow } from "enzyme"
import { Ticket } from "."

describe("Select", () => {

    let wrapper = shallow(<Ticket name={"Ticket"} />)

    it("Renders", () => {
        let select = wrapper.find("select")
        expect(select.length).toBe(1)
    })

    it('Has the following values: LOW, MEDIUM, HIGH, HIGHEST', () => {
        let select = wrapper.find("select")
        expect(select.props().children[0].props.children).toEqual("LOW")
        expect(select.props().children[1].props.children).toEqual("MEDIUM")
        expect(select.props().children[2].props.children).toEqual("HIGH")
        expect(select.props().children[3].props.children).toEqual("HIGHEST")
    });
    it("should call increment index on click of button", () => {
        const app = shallow(<Ticket name={"Ticket"}/>);
        console.log(app.props())
        const spy = jest.spyOn(app.instance(), "increment");
        app.instance().forceUpdate();
        // force click and check for update
        app.find("button").simulate("click");
        expect(spy).toHaveBeenCalled();
    });
})
