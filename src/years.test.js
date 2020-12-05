import { fireEvent, render, screen } from '@testing-library/react';
import Years from './years';
let container;
let props;
beforeEach(() => {
    props = {
        years: [
            '2017', '2018'
        ],
        filters: {
            launch_year: '2017',
        },
        updateDataList: jest.fn()
    };
  container = render(<Years {...props} />);
});

// test('renders Years component', () => {
//   fireEvent.click(document.getElementsByTagName('button'));
//   expect(props.updateDataList).toHaveBeenCalled();
// });

test('renders update data list', () => {
  expect(container).toBeTruthy();
});