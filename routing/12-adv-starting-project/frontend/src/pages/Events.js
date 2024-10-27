import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  // const events = useLoaderData();

  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  //const events = data.events;

  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  //     const response = await fetch('http://localhost:8080/events');

  //     if (!response.ok) {
  //       setError('Fetching events failed.');
  //     } else {
  //       const resData = await response.json();
  //       setFetchedEvents(resData.events);
  //     }
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);

  // return (
  //   <>
  //     {/* <div style={{ textAlign: 'center' }}>
  //       {isLoading && <p>Loading...</p>}
  //       {error && <p>{error}</p>}
  //     </div> */}
  //     {/* {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}
  //     {<EventsList events={events} />}
  //   </>
  // );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  //console.log(response);

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events" };

    //throw { message: "Could not fetch events." };

    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });

    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    // const resData = await response.json();
    // const res = new Response('any data', {});
    // return resData.events;

    //return response;

    const resData = await response.json();
    //console.log(resData.events);
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
