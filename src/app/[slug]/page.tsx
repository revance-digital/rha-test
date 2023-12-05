import Hero from "@/components/hero";
import DNA_Banner from "@/components/banners/dna";
import fetchGraphQL from "@/utils/graphql";

// Map pages to slugs using page ID as key
const pageIds: { [key: string]: string } = {
  clezvf0sr007p0blg15cpb1wa: "home",
  clezxbn3i026p09jzvc2ggwjs: "why",
  // clf78wdub3ctp0blfbg1kfwcu: "results",
  clof6rkrybrez0bl9r3uuqunr: "results",
  clf8f1l3y01p90ak2y4eem0ip: "faq",
  clf8fmc1s025h0bk2mrwvkxlf: "shared",
};

// generate static routes
export async function generateStaticParams() {
  const query = `query Pages {
    pages {
      id
    }
  }`;

  let { data } = await fetchGraphQL(query).then((response) => response.json());

  data = data.pages.map((page: { id: string }) => ({
    ...page,
    slug: pageIds[page.id] || "",
  }));

  return data.map((page: { slug: any }) => encodeURI(page.slug));
}

export default async function GraphQLTest({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // const query = `query Pages {
  // 	  pages {
  // 		  createdAt
  //       id
  //       publishedAt
  //       title
  //       updatedAt
  //     }
  //   }
  // `;

  const query = `query Page($id: ID) {
		  page(where: {id: $id}) {
			  createdAt
        id
        publishedAt
        title
        updatedAt
      }
    }
  `;

  const variables = {
    id: Object.keys(pageIds).find((key) => pageIds[key] === slug),
  };

  const response = await fetchGraphQL(query, variables);

  const {
    data: { page },
  } = await response.json();

  return (
    <>
      <div key={page.id}>
        <h2>slug: {page.slug}</h2>
        <p>title: {page.title}</p>
        <p>id: {page.id}</p>
        <p>publishedAt: {page.publishedAt}</p>
      </div>
    </>
  );
}
