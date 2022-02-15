import {
  PlaylistBody,
  Navbar,
  Header,
  UsersNavbar,
  PlaylistBar,
} from "@/components/templates";
import { Main } from "@/styles/GlobalComponents";

export function Index() {
  return (
    <Main>
      <Header />
      <Navbar />
      <PlaylistBody />
      <UsersNavbar />
      <PlaylistBar />
    </Main>
  );
}
