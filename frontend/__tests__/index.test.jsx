import Home from '@app/page';
import { render, screen } from '@testing-library/react';

describle('Home', () => {
    it('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', {
            name: /Welcome to Cloud Native App!/i,
        });

        expect(heading).toBeInTheDocument();
    })
});