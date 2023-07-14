import {
  Container,
  TitleM,
  InputM,
  BotaoM,
  DivPrincipal,
  ListM,
  DivTPMain,
} from "../../style/style";
import { IoLogoGithub } from "react-icons/io";
import { useCallback, useState, useEffect } from "react";
import { FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
import api from "../../services/api/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export default function Main() {
  const [newRep, setNewRep] = useState("");
  const [reps, setReps] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("reps")));
    const getLSR = localStorage.getItem("reps");
    if (getLSR) {
      setReps(JSON.parse(getLSR));
    }
  }, []);
  useEffect(() => {
    console.log("redefiniu o localstorage");
    if (reps.length > 0) {
      localStorage.setItem("reps", JSON.stringify(reps));
    }
  }, [reps]);

  const hSubmit = useCallback(() => {
    async function submit() {
      const noRepeatRep = reps.find((r) => r === newRep);
      if (newRep === "" || noRepeatRep) {
        if (newRep === "") {
          toast.error("Digite o nome do repositorio.");
        }
        if (noRepeatRep) {
          toast.error("Repositorio já existe");
        }
      } else {
        try {
          setLoading(true);
          const response = await api
            .get(`repos/${newRep}`)
            .then((e) => {
              toast.success(`${newRep} foi adicionado`);
              setReps([...reps, newRep]);
            })
            .catch((e) => {
              toast.error("Erro ao adicionar");
              console.log(e.name, ":", e.message);
            });
        } catch (e) {
          console.log(e.name, ":", e.message);
          toast.error("Erro na requisição ");
        }
        setLoading(false);
        setNewRep("");
      }
    }
    submit();
  }, [newRep, reps]);
  const hDel = useCallback(
    (r) => {
      const find = reps.filter((e) => e !== r);
      setReps(find);
    },
    [reps]
  );
  return (
    <Container>
      <DivPrincipal>
        <TitleM>
          <IoLogoGithub size={30} />
          Meus repositiorios
        </TitleM>
        <InputM
          placeholder="Adicionar repositorios"
          value={newRep}
          onChange={(e) => setNewRep(e.target.value)}
        />
        <BotaoM onClick={hSubmit} loading={loading ? 1 : 0}>
          {loading ? <FaSpinner /> : <FaPlus></FaPlus>}
        </BotaoM>
        <ListM>
          {reps.map((rep) => (
            <li key={rep}>
              <div>
                <FaTrash size={15} onClick={() => hDel(rep)} />
                <DivTPMain>{rep}</DivTPMain>
              </div>
              <Link to={`/repositorio/${encodeURIComponent(rep)}`}>
                <FaBars size={18} />
              </Link>
            </li>
          ))}
        </ListM>
      </DivPrincipal>
    </Container>
  );
}
