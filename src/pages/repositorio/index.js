import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import api from "../../services/api/api";
import { FaSpinner } from "react-icons/fa";
import {
  Container,
  Loading,
  Back,
  DivPrincipal,
  DivIssues,
  TextI,
  DivButtons,
  DivLoadingPage,
  DivFiltros,
} from "../../style/repositorio";
export default function Repositorio() {
  let rep = useParams();
  const repo = rep.repositorio;
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filtro, setFiltro] = useState("open");
  const [loadingPage, setLoadingPage] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function loadIt() {
      setLoading(true);
      const [dataD, issuesD] = await Promise.all([
        api.get(`/repos/${repo}`),
        api.get(`/repos/${repo}/issues`, {
          params: {
            per_page: 5,
          },
        }),
      ]);
      setRepositorio(dataD.data);
      setIssues(issuesD.data);
      setLoading(false);
      console.log(issuesD.data);
    }
    loadIt();
  }, []);

  useEffect(() => {
    async function loadNewPage() {
      setLoadingPage(true);
      const r = await api.get(`/repos/${repo}/issues`, {
        params: {
          state: filtro,
          page: page,
          per_page: 5,
        },
      });
      setIssues(r.data);
      setLoadingPage(false);
    }
    loadNewPage();
  }, [page, filtro]);
  async function changePage(txt) {
    setPage(txt === "back" ? page - 1 : page + 1);
    console.log(page);
  }

  if (loading) {
    return (
      <Loading loading={loading ? 1 : 0}>
        <FaSpinner size={65} />
      </Loading>
    );
  }
  return (
    <Container>
      <DivPrincipal>
        <Back to="/">
          <FaArrowLeft size={30} />
        </Back>
        {repositorio.owner && (
          <img src={repositorio.owner.avatar_url} alt="Foto" />
        )}
        <h1>{repositorio.name}</h1>
        <p>{repositorio.description}</p>
      </DivPrincipal>
      <DivIssues>
        <h2>Issues</h2>
        <DivFiltros>
          <p>Filtros:</p>
          <button
            onClick={() => {
              setFiltro("open");
            }}
          >
            Abertas
          </button>
          <button
            onClick={() => {
              setFiltro("closed");
            }}
          >
            Fechadas
          </button>
          <button
            onClick={() => {
              setFiltro("all");
            }}
          >
            Todas
          </button>
        </DivFiltros>
        {!loadingPage ? (
          issues.map((issue) => (
            <li key={issue.id.toString()}>
              <div>
                <img src={issue.user.avatar_url} alt="User" />
                <a target="_blank" href={issue.html_url}>
                  {issue.title}
                </a>
              </div>
              <TextI>{issue.user.login}</TextI>
            </li>
          ))
        ) : (
          <DivLoadingPage loading={loadingPage ? 1 : 0}>
            <FaSpinner size={65} />
          </DivLoadingPage>
        )}
        <DivButtons selected={page}>
          <button onClick={() => changePage("back")} disabled={page < 2}>
            Voltar
          </button>
          <p>Pag: {page}</p>
          <button onClick={() => changePage("next")}>Próxima</button>
        </DivButtons>
      </DivIssues>
    </Container>
  );
}
