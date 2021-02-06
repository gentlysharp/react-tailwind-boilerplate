import {render,fireEvent} from '@testing-library/react';

import TestButton from "./TestButton";

it('check Button Render', () => {
  const {queryByTitle} = render(<TestButton />);
  const btn = queryByTitle("testButton");
  expect(btn).toBeTruthy()
})

describe("handleClick", () => {
  it("onClick",() => {
    const {queryByTitle} = render(<TestButton />);
    const btn = queryByTitle("testButton");
    expect(btn.innerHTML).toBe("Click Me!");
    fireEvent.click(btn);
    expect(btn.innerHTML).toBe("Clicked!");
  })
})
