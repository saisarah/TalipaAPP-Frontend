import VendorPageHeader from "@/components/PageHeader/VendorPageHeader";
import VendorPage from "@/components/VendorPage";

export const PostDetailsLayout = ({ children, crop }) => {
  return (
    <div className="p-4">
      <VendorPage className="lg:max-w-lg lg:pt-0 lg:rounded-lg lg:shadow pt-16 bg-white">
        <VendorPageHeader back="/" title={crop?.name || "Post Details"} />
        {children}
      </VendorPage>
    </div>
  );
};
