import ButtonDetailComponent from "@/components/ButtonDetail";
import ModelCreateNewEvent from "@/components/ModalCreateNewEvent";

async function getListEvent() {
  const res = await fetch("https://eventmakers-api.vercel.app/api/events");

  return await res.json();
}

export default async function Page() {
  const data = await getListEvent();

  return (
    <div>
      <ModelCreateNewEvent></ModelCreateNewEvent>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.name}</td>
                <td>{value.location}</td>
                <td>{value.date}</td>
                <td>
                  <ButtonDetailComponent
                    index={value.id}
                  ></ButtonDetailComponent>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
