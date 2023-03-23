import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";

export const PostDetailsLayout = ({ children, crop }) => {
  return (
    <Page className="bg-white">
      <PageHeader back="/" title={crop?.name || "Post Details"} />

      {children}
    </Page>
  );
};
