import React, { useEffect } from "react";
import { Table, Form, Row, Col } from "react-bootstrap";

export default function Departures({ flights }) {
  return (
    <>
      {/* <span>{console.log(flights)}</span> */}
      <h1 style={{ color: "blue" }}>Departures</h1>
      <hr></hr>
      <Row>
        <Col sm={4}>
          <Form.Group controlId="exampleForm.SelectCustomSizeLg">
            <Form.Label>Select Airport</Form.Label>
            <Form.Control as="select" size="lg" custom>
              <option value="bkk">Bangkok/Suvarnabhumi Airport</option>
              <option value="dmk">Bangkok/Don Mueang Airport</option>
              <option value="cnx">Chaimai/Chaimai Airport</option>
              <option value="cei">Bangkok/Mae Fah Luang – Chiang Rai Airport</option>
              <option value="hdy">Bangkok/Hat Yai Airport</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>DateTime</th>
            <th>Flight number</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          {flights.data.flights.map((flight, index) => {
            return (
              <tr key={flight.flight_id}>
                <td>{flight.flight_departure.scheduled_at}</td>
                <td>{flight.number}</td>
                <td>{flight.origin_airport.name}</td>
                <td>{flight.destination_airport.name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export async function getStaticProps() {
  const D = new Date();
  const Y = D.getFullYear();
  const m = D.getMonth();
  const d = D.getDate();
  const H = D.getHours();
  const i = "00:00";

  const res = await fetch("https://aot-service.staging.kdlab.dev/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query ($site: String, $type: FlightType, $search: String, $schedule_start: String, $schedule_end: String) {
        flights(site: $site, type: $type, search: $search, schedule_start: $schedule_start, schedule_end: $schedule_end) {
          flight_id
          number
          airline_id
          aircraft_id
          departure_scheduled_at
          arrival_scheduled_at
          flight_departure {
            id
            site_id
            remark
            terminal
            gate
            check_in_counter
            status_color
            estimated_at
            actual_at
            scheduled_at
            updated_at
            flight_shares
            __typename
          }
          flight_arrival {
            id
            site_id
            belt
            terminal
            remark
            status_color
            estimated_at
            first_bag_at
            last_bag_at
            flight_shares
            __typename
          }
          origin_airport {
            id
            name
            city
            iata_code
            icao_code
            __typename
          }
          destination_airport {
            id
            name
            city
            iata_code
            icao_code
            __typename
          }
          airline {
            id
            iata
            icao
            name
            logo
            __typename
          }
          aircraft {
            id
            name
            iata
            icao
            __typename
          }
          updated_at
          __typename
        }
      }
      `,
      variables: {
        site: "bkk",
        type: "D",
        search: "",
        schedule_start: `${Y + "-" + m + "-" + d + " " + H + ":" + i}`,
        schedule_end: `${Y + "-" + m + "-" + d + " " + (H + 2) + ":" + i}`,
      },
    }),
  });

  const flights = await res.json();

  // console.log(JSON.stringify(flights));

  return {
    props: {
      flights,
    },
  };
}
