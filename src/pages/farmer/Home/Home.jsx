import Page from "@/components/Page";
import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import { TabLinks } from "@/components/TabLink";
import { useTabAdvance } from "@/helpers/hooks";

export default function Home({ route }) {
  const { tabs, outlet } = useTabAdvance(route)

  return (
    <Page>
      <FarmerPageHeader back="/farmer" title="Home" />

      <TabLinks 
        tabs={tabs}
        className="sticky top-0 grid h-16 grid-cols-3 bg-white text-lg shadow-md md:top-16 md:flex md:gap-4 md:px-4 md:bg-transparent md:shadow-none md:static"
        defaultClassName="flex items-center justify-center md:text-base"
        activeClassName="border-b border-primary text-primary md:border-0 md:font-bold md:text-slate-600"
      />
        
      {outlet}

    </Page>
  );
}