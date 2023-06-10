import { client } from "../libs/client"
import parse from "html-react-parser"

// posts will be populated at build time by getStaticProps()
export default function Blog({ data }) {
  console.log(data)
  return (
    <ul>
      <li>
        <div>{parse(data.body)}</div>
      </li>
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const data = await client.get({
    endpoint: "blogs",
    contentId: "5ug0c7vdoxxe",
  })

  return {
    props: {
      data,
    },
  }
}
