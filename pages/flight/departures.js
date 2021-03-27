import React, { useEffect } from "react";
import { Table } from "react-bootstrap";

export default function Departures({ flights }) {
  return (
    <>
      <span>{console.log(flights)}</span>
      <h1 style={{ color: "blue" }}>Departures</h1>
      <h4 style={{ color: "tomato" }}>Bangkok/Suvarnabhumi Airport *</h4>
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

export async function getServerSideProps() {
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
        schedule_start: new Date(Date.now()),
        // schedule_start: "2021-03-27T14:51:56.298Z",
      },
    }),
  });
  // .then((res) => res.json())
  // .then((result) => console.log(result));

  // const res = await fetch("http://localhost:8088/api/post/");
  const flights = await res.json();

  // console.log(JSON.stringify(flights));

  return {
    props: {
      flights,
    },
  };
}
