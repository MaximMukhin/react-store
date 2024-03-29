import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";

const Navigation = () => {
  let navigate = useNavigate();

  const goMain = () => navigate("/main");
  const goCatalog = () => navigate("/");
  const goCart = () => navigate("/cart");
  const goMiniProgramms = () => navigate("/miniProgramms");
  const goPostlist = () => navigate("/postlist");
  const goTest = () => navigate("/test");

  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "900",
        marginBottom: "8px",
        marginTop: "8px",
      }}
    >
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button size="large" onClick={goMain}>
          Главная {}
        </Button>

        <Button size="large" onClick={goCatalog}>
          Каталог
        </Button>

        <Button size="large" onClick={goCart}>
          Корзина
        </Button>

        <Button size="large" onClick={goMiniProgramms}>
          Mini-Programms
        </Button>

        <Button size="large" onClick={goPostlist}>
          PostList
        </Button>

        <Button size="large" onClick={goTest}>
          Test
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Navigation;
