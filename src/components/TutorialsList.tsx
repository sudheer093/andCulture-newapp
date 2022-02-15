import { useState, useEffect } from "react";
import TutorialDataService from "../services/TutorialService";
import { useNavigate } from "react-router-dom";
import ITutorialData from "../types/Tutorial";
import { Table } from "react-bootstrap";

function TutorialsList() {
  const [tutorials, setTutorials] = useState<Array<ITutorialData>>([]);
   
  const navigate = useNavigate();
  useEffect(() => {
    retrieveTutorials();
  }, []);


  const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then((response: any) => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };



  const getAddress = (p: ITutorialData) => {
    return p.street || "" + p.city || "" + p.state || "" + p.postal_code || "";
  };
  const _handleButtonClick = (p: ITutorialData) => { 
    navigate(`/view/${p.id}`);
  };
  return (
    <div className="list row">
      <div className="col-md-8">
        <h4>Breweries List</h4>

        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Address(Street, City, State, Zip)</th>
              <th>Website URL</th>
            </tr>
          </thead>
          <tbody>
            {tutorials &&
              tutorials.map((p, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td> 
                    <a className="link" onClick={() => _handleButtonClick(p)}>{p.name}</a>
                  </td>
                  <td>{p.brewery_type}</td>
                  <td>{getAddress(p)}</td>
                  <td>
                    <a href={p.website_url}>{p.website_url}</a>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>      
    </div>
  );
}

export default TutorialsList;
