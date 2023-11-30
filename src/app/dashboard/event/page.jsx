import ModelCreateNewEvent from "@/components/ModalCreateNewEvent";

async function getListEvent() {
  const res = await fetch("https://eventmakers-api.vercel.app/api/events", {
    next: {
      tags: ["adding_event"],
    },

    method: "GET",
  });

  return await res.json();
}

export default async function Page() {
  const data = await getListEvent();

  return (
    <div className="flex flex-col text-xs">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <ModelCreateNewEvent></ModelCreateNewEvent>

            <table className="w-full text-left text-xs">
              <thead className="border bg-orange-200 font-medium">
                <tr>
                  <th scope="col" className="px-6 py-2">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Image
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((value, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                    >
                      <td className="whitespace-nowrap px-6 py-2">
                        {value.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-2">
                        {value.description}
                      </td>
                      <td className="whitespace-nowrap px-6 py-2">
                        {value.location}
                      </td>
                      <td className="whitespace-nowrap px-6 py-2">
                        {value.date}
                      </td>
                      <td className="whitespace-nowrap px-6 py-2">
                        {value.image}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
