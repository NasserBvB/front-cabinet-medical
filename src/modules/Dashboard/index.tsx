import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import FabButton from "ui/FabButton";
import Layout from "ui/Layout";
import Filter from "./components/Filter";
import { Wrappper } from "./styles.";
export default function Dashboard() {
  // const [open, setOpen] = React.useState(false);
const [cin, setCin] = React.useState("");
const handmeFilter = () => {};
  const handleClick = () => {
    // setOpen((cur) => !cur);
  };
  // const toggleModal = () => {
  //   setOpen((cur) => !cur);
  // };

  return (
    <Layout>
      <Wrappper>
          <Filter cin={cin} setCin={setCin} handleFilter={handmeFilter} />
      </Wrappper>

      <FabButton onClick={handleClick}>
        <AiOutlinePlus size="25px" />
      </FabButton>
    </Layout>
  );
}
