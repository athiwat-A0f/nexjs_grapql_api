import React from 'react'
import Link from 'next/link'
import { Row, Card, Col } from "react-bootstrap";

export default function detail({post}) {
    return (
      <>
        <Row>
          <h2>{post.title}</h2>
        </Row>
        <Row>
          <Col sm={8}>
            <img src={post.image}></img>
            <label>{post.description}</label>
          </Col>
        </Row>
        <Row>
          <Col className="text-left">
            <Link href="/explore">Go back...</Link>
          </Col>
        </Row>
      </>
    );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:8088/api/post/");
  const posts = await res.json();
  console.log(posts);
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const res = await fetch(
    "http://localhost:8088/api/post/" + params.id
  );
  const post = await res.json();

  console.log(post);

  return {
    props: {
      post
    },
  };
}