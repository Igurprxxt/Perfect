import HomeTwo from "@/components/homes/home-two";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Home ",
};
const index = () => {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  );
};

export default index;
