import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import * as API from "./api";

function App() {
  const [coursecards, setCourseCards] = useState([]);
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");
  const [pagecount, setPageCount] = useState(0);
  const [pagenumber, setPageNumber] = useState(1);

  useEffect(() => {
    API.getAll()
      .then((coursecards) => setCourseCards(coursecards))
      .then(compareArray(coursecards, result))
      .catch((err) => console.log(err));
  }, [coursecards]);

  useEffect(() => {
    API.search(query, pagenumber, 9)
      .then((result) => {
        setResult(assignId(result.data));
        setPageCount(result.pagination.last);
      })
      .then(compareArray(coursecards, result))
      .catch((err) => console.log(err));
  }, [query, pagenumber]);

  const update = (coursecard, status) => {
    API.update(coursecard, status).then(compareArray(coursecards, result));
  };

  async function create(coursecard, status) {
    let course = await API.create(coursecard);
    await API.update(course, status);
    await compareArray(coursecards, result);
  }

  async function remove(coursecard) {
    for (var item of coursecards) {
      if (
      item.title === coursecard.title &&
      item.number === coursecard.number &&
      item.term === coursecard.term
      ) {
        await API.remove(item);
      }
    }
    await compareArray(coursecards, result);
    delete coursecard.status;
    delete coursecard._id;
  }

  function assignId(array) {
    array.forEach((item, i) => {
      item._id = i + 1;
    });
    return array;
  }

  async function compareArray(coursecards, result) {
    if (coursecards.length >= result.length) {
      coursecards.forEach((coursecardsItem) => {
        result.forEach((resultItem) => {
          if (
            coursecardsItem.title === resultItem.title &&
            coursecardsItem.number === resultItem.number &&
            coursecardsItem.term === resultItem.term
          ) {
            resultItem._id = coursecardsItem._id;
            resultItem.status = coursecardsItem.status;
          }
        });
      });
    } else {
      result.forEach((resultItem) => {
        coursecards.forEach((coursecardsItem) => {
          if (
            coursecardsItem.title === resultItem.title &&
            coursecardsItem.number === resultItem.number &&
            coursecardsItem.term === resultItem.term
          ) {
            resultItem._id = coursecardsItem._id;
            resultItem.status = coursecardsItem.status;
          }
        });
      });
    }
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home coursecards={coursecards} remove={remove} update={update} />
        }
      />
      <Route
        path="/search"
        element={
          <Search
            query={query}
            setQuery={setQuery}
            result={result}
            pagecount={pagecount}
            setPageNumber={setPageNumber}
            update={update}
            remove={remove}
            create={create}
          />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
