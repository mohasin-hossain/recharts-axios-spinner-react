import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ReactLine = () => {

  const students = [
    {
      semester: "1st Sem",
      Alice: 2.0,
      Bob: 2.5,
      Charlie: 3.0,
      David: 3.5,
      Eva: 3.2,
    },
    {
      semester: "2nd Sem",
      Alice: 2.3,
      Bob: 2.7,
      Charlie: 3.0,
      David: 3.3,
      Eva: 3.2,
    },
    {
      semester: "3rd Sem",
      Alice: 2.7,
      Bob: 3.0,
      Charlie: 3.0,
      David: 3.1,
      Eva: 3.2,
    },
    {
      semester: "4th Sem",
      Alice: 3.0,
      Bob: 3.2,
      Charlie: 3.0,
      David: 2.8,
      Eva: 3.2,
    },
    {
      semester: "5th Sem",
      Alice: 3.4,
      Bob: 3.5,
      Charlie: 3.0,
      David: 2.5,
      Eva: 3.2,
    },
    {
      semester: "6th Sem",
      Alice: 3.7,
      Bob: 3.7,
      Charlie: 3.0,
      David: 2.2,
      Eva: 3.2,
    },
    {
      semester: "7th Sem",
      Alice: 3.9,
      Bob: 3.9,
      Charlie: 3.0,
      David: 2.0,
      Eva: 3.2,
    },
    {
      semester: "8th Sem",
      Alice: 4.0,
      Bob: 4.0,
      Charlie: 3.0,
      David: 1.8,
      Eva: 3.2,
    },
  ];

  return (
    <div style={{ margin: "100px 0", display: "grid", placeItems: "center" }}>
      <h1>Simple Line Chart</h1>
      <LineChart
        width={1230}
        height={450}
        data={students}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="semester" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Alice" stroke="#8884d8" />
        <Line type="monotone" dataKey="Bob" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Charlie" stroke="red" />
        <Line type="monotone" dataKey="David" stroke="blue" />
        <Line type="monotone" dataKey="Eva" stroke="violet" />
      </LineChart>
    </div>
  );
};

export default ReactLine;
