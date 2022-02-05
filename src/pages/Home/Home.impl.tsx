import { Layout } from "../../common/components";
import React from "react";
import styled from "styled-components";
import { IHome } from "./Home.interface";
import { Card } from "../../domains/Product";

const Home: React.FC<IHome.IProps> = () => {
  return (
    <Layout>
      HOME
      <Card />
    </Layout>
  );
};

export const Container = styled.div``;

export default Home;
