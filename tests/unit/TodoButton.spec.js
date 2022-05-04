import '@testing-library/jest-dom';
import { render, fireEvent  } from '@testing-library/vue';
import TodoButton from '../../src/components/TodoButton.vue'

describe('TodoButton.vue', () => {
  it('change to blue (primary) when passed', () => {

    const myMock = jest.fn(); // function 可以一起測試

    const { getByText } = render(TodoButton, {
      props: { 
        buttonText: "testing", 
        clickMethod: myMock, 
      },
    });
    const button = getByText('testing'); 
    // getByText 不是 promise，所以用 Await 可能沒什麼意義？
    // findBy...: Returns a Promise 
    // https://testing-library.com/docs/queries/about/

    fireEvent.click(button);
    expect(myMock.mock.calls.length).toBe(1); // 一起測試
    expect(getByText('testing').className).toBe("btn btn-primary btn-sm")
  });
});
