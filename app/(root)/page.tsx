import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({searchParams} : {searchParams: Promise<{query?: string}>}) {

  // const posts = await client.fetch(STARTUPS_QUERY)

  const query = (await searchParams).query;
  const params = {search: query||null};

  const session = await auth();

  console.log(session?.id)

  const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params})

  JSON.stringify(posts)
  // const posts= [{
  //   _createdAt: new Date(),
  //   views: 55,
  //   author: {_id: 1, name: "Saad"},
  //   _id: 1,
  //   description: "This is a description",
  //   image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  //   category: "Robots",
  //   title: 'We robots'
  // }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          pitch your startup,
          <br />
          connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Notices on Virtual
          Competitions.
        </p>
        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results For "${query}"`:`All Startups`}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length>0 ? (
            posts.map((post: StartupCardType, _index: number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ):(
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive/>
    </>
  );
}
