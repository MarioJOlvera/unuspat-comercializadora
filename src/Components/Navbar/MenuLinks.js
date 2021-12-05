import { NavLink } from "react-router-dom"

const MenuLinks = () => {
    return (
        <nav>
            <NavLink exact to='/NuestraFamilia' activeClassName= '.body-background'>
                NUESTRA FAMILIA
            </NavLink>
            <NavLink exact to='/Productos' activeClassName= 'Productos'>
                PRODUCTOS
            </NavLink>
            <NavLink exact to='/Contacto' activeClassName= 'Contacto'>
                CONTACTANOS
            </NavLink>
        </nav>
    );
};

export default MenuLinks;