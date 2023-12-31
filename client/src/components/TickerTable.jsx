import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  Paper,
  TableContainer,
  TableRow,
  Pagination,
  LinearProgress,
} from "@mui/material";
import axios from "axios";
import { quoteData } from "../apis";
import { useStateContext } from "../context/ContextProvider";

const columns = [
  { id: "symbol", label: "Symbol", align: "left" },
  { id: "desc", label: "Name", align: "left" },
  {
    id: "prevclose",
    label: "Previous Close (USD)",
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "change",
    label: "24H Change (%)",
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

const TickerTable = () => {
  const [page, setPage] = useState(1);
  const [updatedStockData, setUpdatedStockData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date())
  const [day, setDay] = useState(date.getDay())


  const fetchUpdatedPriceData = async () => {

    const temp = [];
    var apicalls = 0;
    const maxApiCallsPerMin = 55

    const { data } = await axios.get(
      `http://localhost:5000/api/stocks/getallstocks`
    );
    const currdata = data
    // console.log(currdata)

    for (const item of currdata) {
      const { data } = await axios.get(quoteData(item.symbol));
      const curr = { sym: item.symbol, prev: data.pc, perchange: data.dp };
      temp.push(curr);
      // console.log(temp)
      apicalls++;
      if(apicalls === maxApiCallsPerMin){
        apicalls = 0;
        // wait for 61 secs to ensure that API rate limits are not exceeded.
        await new Promise(resolve => setTimeout(resolve, 61000));
      }
    }
    // console.log("Received all updated prices data from finnhub api.");

    try {
      for (const item of temp) {
        const { sym, prev, perchange } = item;
        const response = await axios.put(
          "http://localhost:5000/api/stocks/updatestock",
          { sym, prev, perchange }
        );
        // console.log("Stock data updated", response.data);
      }
      // console.log("Stock Database updated.");
    } catch (err) {
      console.log("Error updating stock data", err);
    }

  };

  const setCurrPageStocks = async () => {
    setLoading(true)

    const { data } = await axios.get(
      `http://localhost:5000/api/stocks/getstocksbypage?page=${page}`
    );
    setUpdatedStockData(data);
    // console.log(updatedStockData);
    setLoading(false);
  }

  // const addDataToDatabase = async () => {
  //   try {
  //     for(const item of importedData){
  //       const { page, symbol, desc, prevclose, change } = item
  //       const response = await axios.post('http://localhost:5000/api/stocks/addstock', {page, symbol, desc, prevclose, change})
  //       console.log("Item added", response.data)
  //     }
  //   } catch (err) {
  //     console.log("Error adding item to database", err);
  //   }
  // }

  useEffect(() => {
    const dayInterval = setInterval(() => {
      setDate(new Date())

      setDay(date.getDay())
    }, 10000)

    return () => clearInterval(dayInterval)
  }, [date])

  useEffect(() => {
    fetchUpdatedPriceData()
  }, [day])

  useEffect(() => {
    setCurrPageStocks()
  }, [page]);

  const handlePageChange = (event, newpage) => {
    setPage(newpage);
    window.scroll(0, 0);
  };

  return (
    <>
    <TableContainer component={Paper} sx={{maxWidth: '85%', marginBottom: '20px', marginTop: '20px'}}>
      {
        loading ? (
          <div>
            <span>Updating Data</span>
            <LinearProgress />
          </div>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((item) => {
                  return (
                    <TableCell key={item.id} align={item.align}>
                      {item.label}
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {updatedStockData.map((stock) => {
                return (
                  <TableRow key={stock._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {columns.map((column) => {
                      const value = stock[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        )
      }
    </TableContainer>
    <Pagination count={41} variant="outlined" color="primary" onChange={handlePageChange} sx={{marginBottom: '30px'}} />
    </>
  );
};

export default TickerTable;
