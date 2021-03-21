import React from "react";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

export default function NavMenu() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src="/vercel.svg" width="80"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="/flight/departures">
              <a className="nav-link">Flight Departures</a>
            </Link>
            <Link href="/flight/arrivals">
              <a className="nav-link">Flight Arrivals</a>
            </Link>
            <Link href="/explore">
              <a className="nav-link">Explore</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
