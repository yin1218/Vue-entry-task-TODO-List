import '@testing-library/jest-dom';
import { render, fireEvent  } from '@testing-library/vue';
import TodoButton from '../../src/components/TodoButton.vue'

describe('TodoButton.vue', () => {
  it('change to blue (primary) when passed', async () => {

    let tempFunc = () => {
        console.log(this);
    }
    let tempTodoItem = {};

    const { getByText } = render(TodoButton, {
      props: { buttonText: "testing", clickMethod: tempFunc, parentTodoItem: tempTodoItem },
    });
    const button = getByText('testing');

    await fireEvent.click(button);
    expect(getByText('testing').className).toBe("btn btn-primary btn-sm")
  });
});
