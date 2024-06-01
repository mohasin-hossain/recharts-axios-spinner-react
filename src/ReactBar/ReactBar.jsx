import { useEffect, useState } from "react";
import { Vortex } from "react-loader-spinner";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const ReactBar = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const response = data.data.data;
        const phonesData = response.map((phone) => {
          const obj = {
            phone: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phonesData);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      {loading && (
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      )}
      <h1>Simple Bar Chart</h1>
      <BarChart width={1300} height={440} data={phones}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="phone" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ReactBar;
