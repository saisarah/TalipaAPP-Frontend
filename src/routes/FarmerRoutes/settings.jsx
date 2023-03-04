import ChangePassword from "@/pages/admin/Settings/ChangePassword";
import AccountDeletion from "@/pages/farmer/settings/form/AccountDeletion";
import ChangeAddress from "@/pages/farmer/settings/form/ChangeAddress";
import ChangeEmail from "@/pages/farmer/settings/form/ChangeEmail";
import ChangeEmailVerification from "@/pages/farmer/settings/form/ChangeEmailVerification";
import ChangeName from "@/pages/farmer/settings/form/ChangeName";
import ChangeNumber from "@/pages/farmer/settings/form/ChangeNumber";
import ChangeUsername from "@/pages/farmer/settings/form/ChangeUsername";
import Settings from "@/pages/farmer/settings/Settings";

export const settings = [
  {
    path: "settings",
    element: <Settings />,
  },
  {
    path: "settings/change-name",
    element: <ChangeName />,
  },
  {
    path: "settings/change-username",
    element: <ChangeUsername />,
  },
  {
    path: "settings/change-number",
    element: <ChangeNumber />,
  },
  {
    path: "settings/change-email",
    element: <ChangeEmail />,
  },
  {
    path: "settings/change-email/verification",
    element: <ChangeEmailVerification />,
  },
  {
    path: "settings/change-address",
    element: <ChangeAddress />,
  },
  {
    path: "settings/account-deletion",
    element: <AccountDeletion />,
  },
  {
    path: "settings/change-password",
    element: <ChangePassword />,
  },
];
