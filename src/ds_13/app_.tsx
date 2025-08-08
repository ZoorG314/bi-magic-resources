import React from "react";
import CustomDashboard, { DataRow } from "./CustomDashboard";

const data: DataRow[] = [
  {
    label: "1. Температура",
    cells: Array(),
    children: [
      {
        label: "Москва",
        cells: Array(),
        children: [
          {
            label: "ЦАО",
            cells: [
              { value: 7, condition: true }, { value: 8 }, { value: 9 }, { value: 10 }, { value: 11 }
            ]
          },
          {
            label: "ЮЗАО",
            cells: [
              { value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }, { value: 10 }
            ]
          }
        ]
      },
      {
        label: "Санкт-Петербург",
        cells: Array(),
        children: [
          {
            label: "Фонтанка",
            cells: [
              { value: 12 }, { value: 8, condition: true }, { value: 9 }, { value: 10, condition: true }, { value: 11 }
            ]
          },
          {
            label: "Нева",
            cells: [
              { value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }, { value: 10, condition: true }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "2. Влажность",
    cells: Array(),
    children: [
      {
        label: "Вологда",
        cells: Array(),
        children: [
          {
            label: "Центр",
            cells: [
              { value: 7 }, { value: 8 }, { value: 9 }, { value: 10 }, { value: 11 }
            ]
          },
          {
            label: "Запад",
            cells: [
              { value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }, { value: 0 }
            ]
          }
        ]
      },
      {
        label: "Магнитогорск",
        cells: Array(),
        children: [
          {
            label: "Центр",
            cells: [
              { value: 7 }, { value: 8 }, { value: 9 }, { value: 10 }, { value: 11 }
            ]
          },
          {
            label: "Юг",
            cells: [
              { value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }, { value: 0 }
            ]
          }
        ]
      }
    ]
  }
];


const dates = ["2025-07-07", "2025-07-08", "2025-07-09", "2025-07-10", "2025-07-11"];

function App() {
  return (
    <div>
      <h1>Мой кастомный дэшик</h1>
      <CustomDashboard data={data} dates={dates} />
    </div>
  );
}

export default App;