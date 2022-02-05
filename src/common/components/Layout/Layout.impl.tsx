import styled from "styled-components";
import { ILayout } from "./Layout.interface";

const Layout: React.FC<ILayout.IProps> = ({ children }) => {
  return (
    <ContainerStyle>
      <div>Layout</div>
      {children}
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div``;

export default Layout;
