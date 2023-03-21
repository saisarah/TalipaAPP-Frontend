import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { TabLinks } from "@/components/TabLink";
import { useTabAdvance } from "@/helpers/hooks";

export default function Home({ route }) {
  const { tabs, outlet } = useTabAdvance(route)

  return (
    <Page className="bg-slate-50">
      <PageHeader back="/farmer" title="Home" />

      <TabLinks 
        tabs={tabs}
        className="sticky top-0 grid h-16 grid-cols-3 bg-white text-lg shadow-md"
        defaultClassName="flex items-center justify-center"
        activeClassName="border-b border-primary text-primary"
      />
        
      {outlet}

    </Page>
  );
}