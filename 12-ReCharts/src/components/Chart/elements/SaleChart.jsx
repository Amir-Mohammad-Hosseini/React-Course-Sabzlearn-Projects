import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function SaleChart() {
  const data = [
    { name: "فروردین", sale: 6_895_000 },
    { name: "اردیبهشت", sale: 1_276_000 },
    { name: "خرداد", sale: 5_550_000 },
    { name: "تیر", sale: 9_480_000 },
    { name: "مرداد", sale: 7_240_000 },
    { name: "شهریور", sale: 13_350_000 },
    { name: "مهر", sale: 8_900_000 },
    { name: "آبان", sale: 11_400_000 },
    { name: "آذر", sale: 6_300_000 },
    { name: "دی", sale: 12_760_000 },
    { name: "بهمن", sale: 4_500_000 },
    { name: "اسفند", sale: 3_950_000 },
  ];

  return (
    <div className="space-y-10">
      <h3 className="section-title">جزئیات درآمد</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            tickFormatter={(value) => value.toLocaleString("fa-IR")}
          />
          <Tooltip
            formatter={(value, name) => Number(value).toLocaleString("fa-IR")}
          />
          <Line type="monotone" dataKey="sale" name="درآمد" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SaleChart;
