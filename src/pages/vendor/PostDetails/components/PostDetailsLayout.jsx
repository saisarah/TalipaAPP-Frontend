import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import VendorPageHeader from "@/components/PageHeader/VendorPageHeader";
import VendorPage from "@/components/VendorPage";

export const PostDetailsLayout = ({ children, crop }) => {
  return (
    <div className="p-4">
      <VendorPage className="lg:max-w-lg lg:rounded-lg lg:shadow bg-white">
        <VendorPageHeader back="/home" title={crop?.name || "Post Details"} />
        {children}
      </VendorPage>
    </div>
  );
};
