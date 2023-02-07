import React from 'react';


function Menu() {
    return (
        <nav id='menu'>
            <input type='checkbox' id='responsive-menu' onclick='updatemenu()' />
            <label></label>
            <ul>
                <li><a href='http://'>Home</a></li>
                <li><a className='dropdown-arrow' href='http://'>Products</a>
                    <ul className='sub-menus'>
                        <li><a href='http://'>Products 1</a></li>
                        <li><a href='http://'>Products 2</a></li>
                        <li><a href='http://'>Products 3</a></li>
                        <li><a href='http://'>Products 4</a></li>
                    </ul>
                </li>
                <li><a href='http://'>About</a></li>
                <li><a className='dropdown-arrow' href='http://'>Services</a>
                    <ul className='sub-menus'>
                        <li><a href='http://'>Services 1</a></li>
                        <li><a href='http://'>Services 2</a></li>
                        <li><a href='http://'>Services 3</a></li>
                    </ul>
                </li>
                <li><a href='http://'>Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default Menu;