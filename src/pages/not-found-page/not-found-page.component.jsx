import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/language.context";
import { NotFoundPageContainer } from "./not-found-page.styles";

const NotFoundPage = ({ history, location }) => {
  const { isVietnamese } = useContext(LanguageContext);
  return (
    <NotFoundPageContainer>
      <h1>
        Bingoo! <br />
        {isVietnamese
          ? "Chúc mừng bạn đã tìm thấy trang 404"
          : "Congratz for founding a 404 page"}
        <br />
        Mình đang viết trang {location.pathname} này nên chưa có gì chơi ở đây
        đâu
      </h1>
      <div>
        <div />
        <button>
          <h4 onClick={() => history.goBack()}>
            Click để zề lại trang mới nãy
          </h4>
          <h4 onClick={() => history.push("/")}>Click để zề lại trang chủ</h4>
          <h4 onClick={() => history.push("/contact")}>
            Click để chat với mình
          </h4>
        </button>
      </div>
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;
