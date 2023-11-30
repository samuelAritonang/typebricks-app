import ModelCreateNewEvent from "@/components/ModalCreateNewEvent";

async function getListEvent() {
  const res = await fetch("https://eventmakers-api.vercel.app/api/events", {
    next: {
      tags: ['adding_event']  
    },

    method: "GET"    
  });

  return await res.json();
}

export default async function Page() {
  const data = await getListEvent();

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <ModelCreateNewEvent></ModelCreateNewEvent>

            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white font-medium">
                <tr>
                  <th scope="col" className="px-6 py-4">Name</th>
                  <th scope="col" className="px-6 py-4">Description</th>
                  <th scope="col" className="px-6 py-4">Location</th>
                  <th scope="col" className="px-6 py-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((value, index) => {
                  return (
                    <tr key={index} className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                      <td className="whitespace-nowrap px-6 py-4">{value.name}</td>                
                      <td className="whitespace-nowrap px-6 py-4">{value.description}</td>
                      <td className="whitespace-nowrap px-6 py-4">{value.location}</td>
                      <td className="whitespace-nowrap px-6 py-4">{value.date}</td>
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
