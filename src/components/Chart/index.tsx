import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "#zingchart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Abcdxyz",
      data: [1, 2, 3, 21, 2, 2, 1, 32, 3, 1, 2, 3],
      borderColor: "rgb(102, 157, 87)",
      backgroundColor: "green",
    },
    {
      label: "Chau len ba",
      data: [12, 32, 13, 21, 2, 32, 1, 32, 36, 21, 2, 33],
      borderColor: "red",
      backgroundColor: "rgba(61, 6, 6, 0.5)",
    },
    {
      label: "Lalala",
      data: [41, 25, 31, 21, 22, 32, 31, 12, 13, 21, 92, 3],
      borderColor: "rgb(178, 187, 23)",
      backgroundColor: "yellow",
    },
  ],
};

export function Chart() {
  return <Line options={options} data={data} />;
}
