// import '@testing-library/jest-dom';
import { render, fireEvent  } from '@testing-library/vue';
import TodoButton from '../../src/components/TodoButton.vue' // 取出 render 方法，並在第 8 行用來 render 要測試的


describe('TodoButton.vue', () => {
  it('change to blue (primary) when passed', async () => {
    // 定義TodoButton應該要吃的參數
    let text = "testing";
    let tempFunc = () => {
        console.log(this);
    }
    let tempTodoItem = {};
    //render component
    const { getByText } = render(TodoButton, {
      props: { text, tempFunc, tempTodoItem },
    });
    const button = getByText('testing');
    // some action
    await fireEvent.click(button);
    // expected result
    expect(getByText('testing').className).tobe("btn btn-primary btn-sm")
  });
});
