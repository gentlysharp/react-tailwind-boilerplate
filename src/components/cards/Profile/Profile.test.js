import {render,fireEvent} from '@testing-library/react'
import Profile from './Profile'

describe('<Profile />',() => {
  it('matches snapshot',() => {
    const utils = render(<Profile username="veloper" name="김민준" />);
    expect(utils.container).toMatchSnapshot();
  });

  it('show the props correctly',() => {
    const utils = render(<Profile username="veloper" name="김민준" />);
    utils.getByText('veloper');
    utils.getByText('김민준');
    utils.getByText(/김/);
  })
})

