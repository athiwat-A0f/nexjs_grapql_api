import React from 'react'
import { Button } from "react-bootstrap"

export default function index() {
  return (
    <>
    <div className="col-sm-12 text-center">
      <img src="/vercel.svg"></img>
      <h2>HELLO CRUD SEQUELIZE</h2>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button> 
      <Button variant="link">Link</Button>
    </div>
    </>
  );
}
