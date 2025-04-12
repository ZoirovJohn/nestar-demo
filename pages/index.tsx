import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack>
      <Stack className={"home-page"}>
        <Stack>
          <Stack className="container">Popular Properies</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Properies</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Events</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);
