import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../src/components/Hero'
 
describe('Hero', () => {
  it('renders a heading', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

/* now add testing for subheading existence */
it('renders the subheading text', () => {
    render(<Hero />);
    const subheading = screen.getByText(
      /Explore our cutting-edge dashboard, delivering high-quality solutions tailored to your needs/i
    );
    expect(subheading).toBeInTheDocument();
  });

  /* now add testing for CTA existence */
  it('renders the CTA button', () => {
    render(<Hero />);
    
    // Test CTA button
    const ctaButton = screen.getByRole('button', { name: /Start now/i });
    expect(ctaButton).toBeInTheDocument();
  });

/* now add testing for Hero visual existence */
/* note: needed to add <StyledBox data-testid="hero-visual" /> to Hero.tsx */
it('renders the hero visual element', () => {
    render(<Hero />);
    const heroVisual = screen.getByTestId('hero-visual'); // needed to add data-testid="hero-visual" to Hero.tsx
    expect(heroVisual).toBeInTheDocument();
  });
})