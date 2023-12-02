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
  const defaultImage =
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const data = await getListEvent();

  return (
    <div className="flex flex-col text-xs">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="flex flex-col  overflow-hidden">
            <ModelCreateNewEvent></ModelCreateNewEvent>
            <div className="flex flex-wrap justify-center">
              {data.data.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="flex max-w-[16rem] flex-col overflow-hidden rounded-xl bg-purple-200 bg-clip-border text-gray-700 shadow-md m-6"
                  >
                    <div className="m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                      <img
                        className="w-full h-150"
                        src={
                          value.image === null ||
                          value.image === "image.png" ||
                          value.image === ""
                            ? defaultImage
                            : value.image
                        }
                        alt={`Eventbricks ${value.name}`}
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {value.name}
                      </h4>
                      <p className="block mt-2 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
                        {value.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <div className="flex items-center -space-x-3">
                        <p className="block font-sans text-md antialiased font-normal leading-relaxed text-inherit">
                          {value.location}
                        </p>
                      </div>
                      <p className="block font-sans text-md antialiased font-normal leading-relaxed text-inherit">
                        {value.date}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
