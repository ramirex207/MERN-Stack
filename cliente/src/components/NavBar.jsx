import React from 'react'
import '../sass/NavBar.scss'
import { BotonMenu } from './BotonMenu'
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom'
import { AgregarUsuario } from './AgregarUsuario'
import { ListaUsuarios } from './ListaUsuarios'
import { RegistrarUsuario } from './RegistrarUsuario'
import { EditarUsuario } from './EditarUsuario'
//empezando a importar las rutas para la SPA
function NavBar() {
    return (
        <BrowserRouter>
            <div className="navBar">
                <div className="navBar__logo">
                <h2>navbar <span>Responsive</span></h2>
                </div>
                <nav className="navBar__container">    
                    <div className="navBar__menu active">
                        <div className="navBar__link">
                            <NavLink to = '/'><a href="">inicio</a></NavLink>
                        </div>
                        <div className="navBar__link">
                            <NavLink to = 'agregarUsuario'><a href="">Agregar Usuario</a></NavLink>
                        </div>
                        <div className="navBar__link">
                            <NavLink to = 'editarUsuario'><a href="">Editar Usuario</a></NavLink>
                        </div>
                        <div className="navBar__link">
                            <NavLink to = 'listaUsuarios'><a href="">Lista de Usuarios</a></NavLink>
                        </div>
                    </div>
                    <div className="navBar__boton">
                    <BotonMenu/>
                    </div>  
                </nav>
            </div>
            <Routes>
                <Route path='/' element= {<RegistrarUsuario/>}/>
                <Route path='agregarUsuario' element= {<AgregarUsuario/>}/>
                <Route path='editarUsuario' element= {<EditarUsuario/>}/>
                <Route path='listaUsuarios' element= {<ListaUsuarios/>}/>

            </Routes>
        </BrowserRouter>
        
        
    )
}

export {NavBar} 