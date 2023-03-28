import logo from './logo.svg';
import './App.css';
import {Header} from "./header/Header";
import {List} from "./List/List";
function Todo_list() {

  return (<>
          <header>
            <Header/>
          </header>
          {/*<div className={'ListMainTest'}>*/}
          {/*  <List />*/}
          {/*</div>*/}
      </>
  );
}

export default Todo_list;
