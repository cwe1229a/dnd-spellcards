import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import { App, WrappedApp } from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('Renders hello world!', () => {
    // ARRANGE
    render(<WrappedApp />);
    //ACT
    //EXPECT
    expect(screen.getByRole('heading', {
      level: 1,
    })
    ).toHaveTextContent('Hello World!');
  });

  it('renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', {
      level: 1,
    })
    ).toHaveTextContent('Not Found');
  });
  })
