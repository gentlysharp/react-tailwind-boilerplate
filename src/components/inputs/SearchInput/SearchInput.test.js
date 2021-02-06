import {render,fireEvent} from '@testing-library/react';
import SearchInput from '../../inputs/SearchInput/SearchInput';


describe("handleChange",() => {
  it("onChange",() => {
    const {queryByTitle} = render(<SearchInput/>);
    const input = queryByTitle("dummySearch");
    fireEvent.change(input, {target: {value:"testValue"}})
    expect(input.value).toBe("testValue")
  })
})