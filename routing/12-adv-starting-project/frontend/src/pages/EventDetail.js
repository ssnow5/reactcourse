import {
  useParams,
  json,
  useRouteLoaderData,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventDetailPage() {
  const params = useParams();
  // const data = useRouteLoaderData("event-detail");
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    // <>
    //   <h1>EventDetailPage</h1>
    //   <p>Event ID: {params.eventId}</p>
    // </>
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await resolve={event}>
          {(loadEvent) => <EventItem event={loadEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await resolve={events}>
          {(loadEvents) => <EventsList events={loadEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    //return response;

    const resData = await response.json();
    return resData.event;
  }
}

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

export async function loader({ request, params }) {
  const id = params.eventId;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });

  // const response = await fetch("http://localhost:8080/events/" + id);

  // if (!response.ok) {
  //   throw json(
  //     { message: "Could not fetch details for selected event." },
  //     { status: 500 }
  //   );
  // } else {
  //   return response;
  // }

  // return fetch("http://localhost:8080/events/" + id);
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/events");
}
