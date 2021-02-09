import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import "./app.css";
import Scroll from "../components/Scroll";

export default function App() {
  const dispatch = useDispatch();
  const { searchField } = useSelector((state) => state.setSearchField);
  const { robots, isPending } = useSelector((state) => state.requestRobots);

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1 className="tc">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <Searchbox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}
