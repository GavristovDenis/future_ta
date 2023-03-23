import { TextField, InputAdornment, InputLabelProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = ({ setSearch, SearchBook }: any) => {
  return (
    <div className="search_bar">
      <TextField
        className="search_bar_input"
        variant="outlined"
        placeholder="Найти..."
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={SearchBook}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" className="search_bar_background">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      >
        <SearchIcon />
      </TextField>
    </div>
  );
};
