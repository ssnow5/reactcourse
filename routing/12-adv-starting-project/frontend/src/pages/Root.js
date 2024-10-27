import MainNavigation from "../components/MainNavigation";
import {
  Outlet,
  useNavigate,
  useNavigation,
  userNavigation,
} from "react-router-dom";

function RootLayout() {
  // const events = useLoaderData();
  // console.log(events);

  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
