import ButtonDetailComponent from "@/components/ButtonDetail"
import ModelCreateNewEvent from "@/components/ModalCreateNewEvent"

async function getListEvent() {

    const res = await fetch('https://dummyjson.com/products')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.log(res)
    }

    return await res.json()

}

export default async function Page() {

    const data = await getListEvent()

    console.log(data.products)

    return (
        <div>
            
            <ModelCreateNewEvent></ModelCreateNewEvent>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.products.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.title}</td>
                                <td>{value.price}</td>
                                <td>
                                    <ButtonDetailComponent index={index + 1}></ButtonDetailComponent>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
