import Nodes from './Nodes.js';
import { request } from './api.js';
import ImageViewer from './ImageViewer.js';
import Loading from './Loading.js';
import Breadcrumb from './Breadcrumb.js';
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
    isLoading: false,
    nodes: [],
    paths: [],
  };

  const breadcrumb = new Breadcrumb({
    $target,
    initialState: this.state.paths,
  });

  const loading = new Loading({
    $target,
  });

  const nodes = new Nodes({
    $target,
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
      //nodes: DUMMY_DATA
      selectedImageUrl: null,
    },
    onClick: async (node) => {
      if (node.type === 'DIRECTORY'){
        fetchNodes(node.id);
        this.setState({
          ...this.state,
          paths: [...this.state.paths, node]
        });
      }

      if (node.type === 'FILE'){
        this.setState({
          ...this.state,
          //selectedImageUrl: `https://cat-api.roto.codes/static${node.filePath}`,
          selectedImageUrl: `https://kdt-frontend.cat-api.programmers.co.kr/static${node.filePath}`,
        });
      }
    },
    onPrevClick: async () => {
      const nextPaths = [...this.state.paths];
      nextPaths.pop();
      this.setState({
        ...this.state,
        paths: nextPaths,
      });

      if (nextPaths.length === 0) {
        await fetchNodes();
      } else {
        await fetchNodes(nextPaths[nextPaths.length - 1].id);
      }
    }
  });

  const imageViewer = new ImageViewer({
    $target,
    onClose: () => {
      this.setState({
        ...this.state,
        selectedImageUrl: null,
      });
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;

    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });

    imageViewer.setState({
      selectedImageUrl: this.state.selectedImageUrl,
    });

    loading.setState(this.state.isLoading);
    
    breadcrumb.setState(this.state.paths);
  };

  const fetchNodes = async (id) => {
    this.setState({
      ...this.state,
      isLoading: true,
    });
    const nodes = await request(id ? `/${id}` : '/');
    this.setState({
      ...this.state,
      nodes,
      isLoading: false,
      isRoot: id ? false : true,
    });
  };

  fetchNodes();

}