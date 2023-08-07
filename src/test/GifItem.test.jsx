import {render } from '@testing-library/react';
import GifItem  from '../components/GifItem';

describe('Test de screen', () => {
    test('debe de mostrar el componente correctamente', () => {
        const img = {
            title: 'Un titulo',
            url: 'https://localhost/algo.jpg'
        }
        const {container} = render(<GifItem img={img} />);
        expect(container).toMatchSnapshot();
    });
});