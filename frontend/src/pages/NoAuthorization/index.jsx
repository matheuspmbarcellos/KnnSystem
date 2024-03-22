import { useContext } from "react";
import Button from "../../components/Button/Button";
import { PageContainer } from "../../components/PagesStyles/buscar";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "../../context/NavigateContext";

export const NoAuthorization = () => {
    const { signed } = useContext(AuthContext);
    const navigate = useNavigation()

    if(signed)
    return (
        <PageContainer>
            <h1>Acesso não autorizado🔒</h1>
            <Button onClick={() => navigate(-3)}>Voltar</Button>
        </PageContainer>
    )
}