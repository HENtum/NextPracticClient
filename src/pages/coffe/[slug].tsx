import ItemPage from "@/components/ItemPage";
import { ItemsService } from "@/services/Items.service";
import { Iitems } from "@/types/Iitems";
import Meta from "@/ui/Meta";
import { FC } from "react";

interface CoffePageId {
  item: Iitems;
}

const CoffePageId: FC<CoffePageId> = ({ item }) => {
  return (
    <>
      <Meta title={item.name} description="ItemPage" />
      <ItemPage item={item} />
    </>
  );
};
export default CoffePageId;

export async function getStaticPaths() {
  const data = await ItemsService.getAll();
  const paths = data.map((obj: Iitems) => {
    return {
      params: { slug: obj.slug },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps({ params }: any) {
  const item = await ItemsService.getBySlug(params?.slug);

  return {
    props: {
      item: item,
    },
  };
}
