async function getDetailEvent(id) {

    const res = await fetch(`https://dummyjson.com/products/${id}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.log(res)
    }

    return await res.json()

}

export default async function DetailProductPage({ params }) {

    console.log(params)

    const { id } = params

    const data = await getDetailEvent(id)

    return (
        <>
            <p>Title</p>
            <input className="border" type="text" value={data.title}></input>
            <p>Price</p>
            <input className="border" type="number" value={data.price}></input>
            <button>
                Update
            </button>
        </>
    )
}