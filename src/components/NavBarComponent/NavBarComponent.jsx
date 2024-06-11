import React from "react";

import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import CardWidgetComponent from "../CardWidgetComponent/CardWidgetComponent";
import { getAllCategories } from "../../services/products";

const NavBarComponent = () => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            Sneakers Shop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                Inicio
              </Link>
            </Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categories.map((category) => {
                return (
                  <NavDropdown.Item key={category.slug}>
                    <Link to={`/category/${category.slug}`}>{category.name}</Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CardWidgetComponent />
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
