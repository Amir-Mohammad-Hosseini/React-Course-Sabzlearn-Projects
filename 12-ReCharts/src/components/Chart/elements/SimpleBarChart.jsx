import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "فروردین", sale: 3_470 },
  { name: "اردیبهشت", sale: 1_745 },
  { name: "خرداد", sale: 20_943 },
  { name: "تیر", sale: 9_559 },
  { name: "مرداد", sale: 5_240 },
  { name: "شهریور", sale: 12_719 },
  { name: "مهر", sale: 13_662 },
  { name: "آبان", sale: 24_575 },
  { name: "آذر", sale: 29_487 },
  { name: "دی", sale: 32_090 },
  { name: "بهمن", sale: 25_043 },
  { name: "اسفند", sale: 33_567 },
];
const SimpleBarChart = () => {
  return (
    <div className="space-y-10">
      <h3 className="section-title">آمار کاربران</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis padding={{ top: 0, bottom: 0, right: 20 }} tickFormatter={(value) => value.toLocaleString("fa-IR")} />
          <Bar dataKey="sale" fill="#8884d8" name="کاربران" />
          <Tooltip
            formatter={(value, name) => Number(value).toLocaleString("fa-IR")}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
