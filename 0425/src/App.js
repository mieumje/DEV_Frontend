import Nodes from './Nodes.js';
import { request } from './api.js';
const DUMMY_DATA = [
  {
    "id": "1",
    "name": "노란 고양이",
    "type": "DIRECTORY",
    "filepath": null,
    "parent": null,
  },
  {
    "id": "3",
    "name": "까만 고양이",
    "type": "DIRECTORY",
    "filepath": null,
    "parent": null,
  },
  {
    "id": "10",
    "name": "고등어무늬 고양이",
    "type": "DIRECTORY",
    "filepath": null,
    "parent": null,
  },
  {
    "id": "13",
    "name": "삼색 고양이",
    "type": "DIRECTORY",
    "filepath": null,
    "parent": null,
  },
  {
    "id": "14",
    "name": "회색 고양이",
    "type": "DIRECTORY",
    "filepath": null,
    "parent": null,
  },
  {
    "id": "20",
    "name": "하얀 고양이",
    "type": "DIRECTORY",
    "filepath": null,
    "parent": null,
  },

]
export default function App({
  $target,
}){
  this.state = {
    isRoot: true,
    nodes: [],
  };

  const nodes = new Nodes({
    $target,
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
      //nodes: DUMMY_DATA
    },
    onClick: async (node) => {
      if (node.type === 'DIRECTORY'){
        fetchNodes(node.id);
      }
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;

    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });
  };

  const fetchNodes = async (id) => {
    const nodes = await request(id ? `/${id}` : '/');
    this.setState({
      ...this.state,
      nodes,
      isRoot: id ? false : true,
    });
  };

  fetchNodes();

}