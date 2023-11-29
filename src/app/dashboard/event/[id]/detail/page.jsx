async function getDetailEvent(id) {
  const res = await fetch(
    `https://eventmakers-api.vercel.app/api/events/${id}`
  );

  return await res.json();
}

export default async function DetailProductPage({ params }) {
  const { id } = params;
  const data = await getDetailEvent(id);

  return (
    <>
      <p>Event Name</p>
      <input className="border" type="text" value={data.data.name}></input>
      <p>Event Location</p>
      <input className="border" type="text" value={data.data.location}></input>
      <p>Event Date</p>
      <input className="border" type="text" value={data.data.date}></input>
      <button>Update</button>
    </>
  );
}
