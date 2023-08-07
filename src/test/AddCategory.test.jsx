import AddCategory from "../components/AddCategory";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Pruebas en <AddCategory />", () => {

    test("Debe de cambiar el valor de la caja de texto", () => {
        render(<AddCategory setValue={()=>{}} value="Hola mundo" onNewCategory={()=>{}}/>);
        const input = screen.getByRole("textbox");
        // fireEvent.input(input, { target: { value: "Hola mundo" } });
        // screen.debug() En mi caso esto no tiene sentido porque mi state esta en el padre
        expect(input.value).toBe("Hola mundo");

    })

    test("debe de llamar onNewCategory, si el input tiene un valor", () => {
        const inputValue = "Luffy";
        render(<AddCategory setValue={()=>{}} value="Hola mundo" onNewCategory={()=>{}}/>);

        // const input = screen.getByRole("textbox");
        // const form = screen.getByRole("form");

        // fireEvent.input(input, { target: { value: inputValue } });

        // fireEvent.submit(form);

        
        
    });


})