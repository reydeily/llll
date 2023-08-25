import * as S from "./styles"
export function Header() {
  return (
    <S.Header>
      <h1>Inovando na Tecnologia</h1>
      <S.NavBar>
        <ul>
          <li>
            <a href="/list">Noticias</a>
          </li>
          <li>
            <a href="/list">Tópicos</a>
          </li>
          <li>
            <a href="/list">Descrição</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}