import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {

  test('has the correct overall structure', () => {
    // ARRANGE
    // No setup needed
    
    // ACT
    render(<App />);
    
    // ASSERT
    const appDiv = document.querySelector('.App');
    expect(appDiv).toBeInTheDocument();
    expect(appDiv).toHaveClass('App');
    
    // Verify header exists inside App
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('renders without crashing', () => {
    // ARRANGE
    // No setup needed
    
    // ACT & ASSERT (combined for this simple test)
    expect(() => render(<App />)).not.toThrow();
  });
});