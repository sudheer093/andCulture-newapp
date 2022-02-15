import http from "../http-common";
import ITutorialData from "../types/Tutorial";

const getAll = () => {
  // return http.get<Array<ITutorialData>>("https://api.openbrewerydb.org/breweries");
  return http.get<Array<ITutorialData>>("http://localhost:57678/Projects");
};

const get = (id: any) => {
  // return http.get<ITutorialData>(`https://api.openbrewerydb.org/breweries/${id}`);
  return http.get<ITutorialData>(`http://localhost:57678/Projects/${id}`);
};


const TutorialService = {
  getAll,
  get
};

export default TutorialService;
