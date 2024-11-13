import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
  test('renders hello world as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const helloWorldElement = screen.getByText('Hello Everyone!', {
      exact: true,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('render good to see you if button not clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const outputElement = screen.getByText('good to see you!', {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('render changed! if button clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText('Changed!', {
      exact: true,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render good to see you if button clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText('good to see you!', {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
