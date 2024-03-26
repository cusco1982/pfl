'use server'

async function getData() {
    // const res = await fetch('https://www.boredapi.com/api/activity')
    const res = await fetch('https://www.boredapi.com/api/activity',{cache:'no-store'})

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}



// https://ipinfo.io/161.185.160.93/geo
// https://official-joke-api.appspot.com/random_joke
// https://randomuser.me/api/



export default async function Page() {
    const data = await getData()

    console.log(data)


    return (
        <main style={{backgroundColor:"orange"}}>


            {data.activity}




        </main>
    )
};