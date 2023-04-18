import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import VendorPageHeader from "@/components/PageHeader/VendorPageHeader";
import VendorPage from "@/components/VendorPage";

export const PostDetailsLayout = ({ children, crop }) => {
  return (
    <div className="p-4">
      <VendorPage className=" rounded bg-white  ">
        <VendorPageHeader back="/home" title={crop?.name || "Post Details"} />
        {children}
      </VendorPage>
    </div>
  );
};
