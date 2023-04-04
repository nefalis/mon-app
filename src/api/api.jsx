
import logements from "./logements.json"

const getAllLogement = () => {
    return logements
};

const getOneLogement = async (id) => {
    return await logements.find((logement) => logement.id === id);
}

export { getAllLogement, getOneLogement };