import React from "react"
import { shallow } from "enzyme"
import App from "./App"
import { Ticket } from "./components/Ticket"

it("Should render Ticket component", () => {
    const wrapper = shallow(<App />)
    const ticket = wrapper.find(Ticket)
    expect(ticket.exists()).toBe(true)
})