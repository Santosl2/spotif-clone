import { PlaylistBody, Navbar, Header } from "@/components/templates";
import { Main } from "@/styles/GlobalComponents";

export function Index() {
  return (
    <Main>
      <Header />
      <Navbar />
      <PlaylistBody />
    </Main>
  );
}
