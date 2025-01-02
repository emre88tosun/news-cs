import { render, screen } from '@testing-library/react';
import { Card, CardContent, CardFooter, CardHeader } from './card';

describe('Card component', () => {
  it('renders with default styles', () => {
    render(<Card>Card content</Card>);
    const card = screen.getByText('Card content');

    expect(card).toHaveClass('rounded-lg');
    expect(card).toHaveClass('border');
    expect(card).toHaveClass('bg-card');
    expect(card).toHaveClass('text-card-foreground');
    expect(card).toHaveClass('shadow-sm');
  });

  it('renders with custom className', () => {
    render(<Card className="custom-class">Custom Card</Card>);
    const card = screen.getByText('Custom Card');

    expect(card).toHaveClass('custom-class');
  });

  it('renders CardHeader with default styles', () => {
    render(<CardHeader>Card Header</CardHeader>);
    const header = screen.getByText('Card Header');

    expect(header).toHaveClass('flex');
    expect(header).toHaveClass('flex-col');
    expect(header).toHaveClass('space-y-1.5');
    expect(header).toHaveClass('p-6');
  });

  it('renders CardContent with default styles', () => {
    render(<CardContent>Card Content</CardContent>);
    const content = screen.getByText('Card Content');

    expect(content).toHaveClass('p-6');
    expect(content).toHaveClass('pt-0');
  });

  it('renders CardFooter with default styles', () => {
    render(<CardFooter>Card Footer</CardFooter>);
    const footer = screen.getByText('Card Footer');

    expect(footer).toHaveClass('flex');
    expect(footer).toHaveClass('items-center');
    expect(footer).toHaveClass('p-6');
    expect(footer).toHaveClass('pt-0');
  });
});
