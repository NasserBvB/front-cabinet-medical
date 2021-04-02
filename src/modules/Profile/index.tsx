import React from "react";
import Layout from "ui/Layout";
import ChangePassword from "./components/ChangePassword";
import ProfileCard from "./components/ProfileCard";
import ProfileForm from "./components/ProfileForm";
import { Wrapper } from "./styles";

export default function Profile() {
  const [modifying, setModifying] = React.useState(false);
  return (
    <Layout>
      <Wrapper>
        {!modifying && (
          <ProfileCard
            togggleModification={() => setModifying((cur) => !cur)}
          />
        )}
        {modifying && (
          <ProfileForm handleCancel={() => setModifying((cur) => !cur)} />
        )}
        <ChangePassword />
      </Wrapper>
    </Layout>
  );
}
