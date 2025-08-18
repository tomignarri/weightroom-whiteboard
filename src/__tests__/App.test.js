import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders the header section', () => {
    // ARRANGE
    // No setup needed
    
    // ACT
    render(<App />);
    
    // ASSERT
    const header = screen.getByRole('banner'); // header elements have 'banner' role
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('App-header');
  });

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