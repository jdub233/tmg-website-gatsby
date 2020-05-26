import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const EventsList = () => {
    const data = useStaticQuery(graphql`
    {
      allEventsJson {
        edges {
          node {
            fieldData {
              Event_Year
              Event_Link
              EventID
              Venue_Name
              Venue_Link
              Presenter
              Title
              Type
            }
          }
        }
      }
    }
  `)
    return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default EventsList
