import {render, screen} from '@testing-library/react';
import GifItem  from '../components/GifItem';

describe('Test de screen', () => {
    const img = {
        title: 'Un titulo',
        url: 'https://localhost/algo.jpg'
    }
    test('debe de mostrar el componente correctamente', () => { 
        const {container} = render(<GifItem img={img} />);
        expect(container).toMatchSnapshot();
    });

    test("debe de mostrar la imagen con el URL y el alt idicado", () => {
        render(<GifItem img={img} />);

        // expect(document.querySelector('img').src).toBe(img.url);
        // expect(document.querySelector('img').alt).toBe(img.title);

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(img.url);
        expect(alt).toBe(img.title);
    })

    test("debe de tener un titulo", ()=>{
        render(<GifItem img={img} />);
        expect(screen.getByText(img.title)).toBeTruthy();
    })
});

