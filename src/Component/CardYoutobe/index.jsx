import React, { useState } from "react";
import {
  Wrapper,
  Box,
  Iframe,
  Title,
  BigContainer,
  Container,
  Con,
} from "./style";

export const CardYoutobe = () => {
  const [link, setLink] = useState("https://www.youtube.com/embed/4Usso0EThIM");

  return (
    <Wrapper>
      <Box>
        <BigContainer>
          <Iframe
            width="560"
            height="315"
            src={link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Iframe>
          <Title>
            Dasturlash nima? Programist dazmol tuzatuvchi emas! | Дастурлаш
            Нима?{" "}
          </Title>
        </BigContainer>
      </Box>
      <Box flexing>
        <Container>
          <Con
            onClick={() => setLink("https://www.youtube.com/embed/OWh-5uaPnL0")}
          >
            <Iframe
              small
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OWh-5uaPnL0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></Iframe>
            <Title small>
              #2 HTML Tag | head, body, html, meta. HTML(UZBEK)
            </Title>
          </Con>
        </Container>
        <Container>
          <Iframe
            small
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Suf7QXVvcp8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Iframe>
          <Title small>
            #3 HTML Boshlang’ich taglari.(asosiy ishlatiladigon taglar) (HTML
            UZBEK)
          </Title>
        </Container>
        <Container>
          <Iframe
            small
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZEdRpSiL3os"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Iframe>
          <Title small>#4 Image va Link | HTML(Uzbek)</Title>
        </Container>
        <Container>
          <Iframe
            small
            width="560"
            height="315"
            src="https://www.youtube.com/embed/64RytzOkMDE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Iframe>
          <Title small>#5 Video, Audio, Iframe (HTML Uzbek)</Title>
        </Container>
      </Box>
    </Wrapper>
  );
};

export default CardYoutobe;
