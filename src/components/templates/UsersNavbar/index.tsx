import { Container } from "./styles";

import { RiUserFollowLine } from "react-icons/ri";
import { Divider } from "@/components/atoms";

export function UsersNavbar() {
  return (
    <Container>
      <div id="friendHeader">
        <h4>Friend Activity</h4>
        <RiUserFollowLine />
      </div>
      <Divider />
      <small> Your friends will show up here</small>
    </Container>
  );
}
