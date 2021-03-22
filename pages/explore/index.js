import React from 'react'
import Link from "next/link";
import style from "../../styles/Explore.module.css";
import { Row, Card, Col } from "react-bootstrap";

export default function index({posts}) {
    return (
        <>
            <h2>Explore The World!</h2>
            <Row>
            {posts.map((post) => {
              return (
                <Col sm={3} key={post.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={post.image}
                      className={style.min_height}
                    />
                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>
                        {post.description.length > 50
                          ? post.description.substring(0, 50) + "..."
                          : post.description}
                      </Card.Text>
                      <Link
                        href={{
                          pathname: "/explore/[id]",
                          query: { id: post.id },
                        }}
                      >
                        <a>Read More...</a>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
            </Row>
        </>
    );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8088/api/post/");
  const posts = await res.json();

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}


