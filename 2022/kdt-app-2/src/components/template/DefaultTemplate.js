// 어떤 페이지를 가더라도 항상 보여줄 템플릿
import Menu from "@components/domain/Menu";

const DefaultTemplate = ({ children }) => {
  return (
    <div>
      <Menu />
      <main>{children}</main>
    </div>
  );
};

export default DefaultTemplate;