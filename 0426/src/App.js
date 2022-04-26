import { request } from "./api.js";
import Header from "./Header.js";
import SuggestKeyword from "./SuggestKeyword.js";

export default function App({
  $target,
}){
  this.state = {
    keyword: '',
    keywords: [],
  };

  this.setState = nextState => {
    this.state = nextState;
    header.setState({
      keyword: this.state.keyword,
    });
    suggestKeyword.setState(this.state.keywords);
  };


  const header = new Header({
    $target,
    initialState: {
      keyword: this.state.keyword,
    },
    onKeywordInput: async (keyword) => {
      if (keyword.trim().length > 1) {
        const keywords = await request(`/keywords?q=${keyword}`);
      
        this.setState({
          ...this.state,
          keywords,
        });
      }
    }
  });

  const suggestKeyword = new SuggestKeyword({
    $target,
    initialState: this.state.keywords,
    onKeywordSelect: (keyword) => {
      console.log(keyword);
      this.setState({
        ...this.state,
        keyword,
      });
    },
  });
}