import "./App.css";
import Accordion from "./components/accordion/Accordion";
import Color from "./components/colorCodegenerator/Color";
import StarRating from "./components/StarRating/StarRating";
import Slider from "./components/Slider/Slider";
import LoadMoreData from "./components/Load_More_Data/LoadMoreData";
import NestedMenu from "./components/NestedMenu/NestedMenu";
import QrCodeGenerator from "./components/QrCodeGenerator/QrCodeGenerator";
import LightDarkMode from "./components/LightDarkMode/LightDarkMode";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import TabsParent from "./components/customTabs/TabsParent";
import Modal from "./components/customModal/Modal";
import SearchAutoComplete from "./components/search-auto-complete/SearchAutoComplete";
import GithubFinder from "./components/github-profile-finder/GithubFinder";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import UsingCustomHooks from "./components/Custom-hooks/UsingCustomHooks";
function App() {
  return (
    <div className="App">
      <ScrollIndicator />
      <Accordion />
      <Color />
      <StarRating noOfStars={10} />
      <Slider url="https://picsum.photos/v2/list" page="1" limit="15 " />
      <LoadMoreData />
      <NestedMenu />
      <QrCodeGenerator />
      <LightDarkMode />
      <TabsParent />
      <Modal header={<h2>This Header is passed from Parent</h2>} />
      <GithubFinder />
      <SearchAutoComplete />
      <TicTacToe />
      <UsingCustomHooks/>
    </div>
  );
}

export default App;
