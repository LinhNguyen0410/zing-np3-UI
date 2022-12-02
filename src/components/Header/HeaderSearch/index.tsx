import { SearchIcon } from "../../../assets/icons";
import "./style.css";
type Props = {
  onChange: Function;
};
const HeaderSearch = ({ onChange }: Props) => {
  const handleInputChange = (e: any) => {
    onChange(e.target.value);
  };
  return (
    <div className="input-container">
      <div className="">
        <SearchIcon />
      </div>
      <input type="text" className={`input bg-[#081018]`} onChange={handleInputChange} />
    </div>
  );
};

export default HeaderSearch;
