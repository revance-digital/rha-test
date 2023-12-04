import fetchGraphQL from "@/utils/graphql";
import Link from "next/link";

// Map pages to slugs using page ID as key
const pageIds: { [key: string]: string } = {
  clezvf0sr007p0blg15cpb1wa: "home",
  clezxbn3i026p09jzvc2ggwjs: "why",
  clf78wdub3ctp0blfbg1kfwcu: "results",
  clof6rkrybrez0bl9r3uuqunr: "results",
  clf8f1l3y01p90ak2y4eem0ip: "faq",
  clf8fmc1s025h0bk2mrwvkxlf: "shared",
};

export default async function PageList() {
  const query = `query Pages {
		pages {
		    createdAt
            id
            publishedAt
            title
            updatedAt
        }
    }
`;

  let { data } = await fetchGraphQL(query).then((response) => response.json());

  data = data.pages.map((page: { id: string }) => ({
    ...page,
    slug: pageIds[page.id] || "",
  }));

  return data.map(
    (page: {
      slug: URL | string;
      id: String;
      publishedAt: String;
      updatedAt: String;
      title: string;
    }) => (
      <ul>
        <li>
          <Link href={page.slug}>
            <div>
              <h1>{page.title}</h1>
              <p>{page.id}</p>
              <p>{page.publishedAt}</p>
              <p>{page.updatedAt}</p>
            </div>
          </Link>
        </li>
      </ul>
    )
  );
}
