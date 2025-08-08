import React from "react";
import CustomDashboard, { DataCell, DataRow } from "./CustomDashboard";

type Props = {
  data: any[];
  config: {
    groupFields: string[];
    dateField: string;
    valueField: string;
    conditionField?: string;
  };
  meta: any;
};

const App: React.FC<Props> = ({ data, config, meta }) => {
  if (!data || !config || !config.groupFields || !config.dateField || !config.valueField) {
    return <div style={{ textAlign: "center", marginTop: "30px", fontFamily: "monospace" }}>Ожидание загрузки данных...</div>;
  }

  const {
    groupFields,
    dateField,
    valueField,
    conditionField
  } = config;

  // Сбор всех уникальных дат
  const datesSet = new Set<string>();
  data.forEach(row => {
    if (row[dateField]) datesSet.add(row[dateField]);
  });
  const dates = Array.from(datesSet).sort();

  // Рекурсивная функция для построения дерева
  const buildRows = (
    rows: any[],
    level: number
  ): DataRow[] => {
    if (level >= groupFields.length) {
      // Достигли нижнего уровня → создаём leaf-узлы
      const groupedByLabel = new Map<string, any[]>();

      rows.forEach(row => {
        const label = row[groupFields[level - 1]] || "—";
        if (!groupedByLabel.has(label)) {
          groupedByLabel.set(label, []);
        }
        groupedByLabel.get(label)!.push(row);
      });

      return Array.from(groupedByLabel.entries()).map(([label, groupRows]) => {
        const cells: DataCell[] = dates.map(date => {
          const match = groupRows.find(r => r[dateField] === date);
          return {
            value: match?.[valueField] ?? null,
            condition: conditionField ? !!match?.[conditionField] : false
          };
        });

        return { label, cells };
      });
    }

    const currentField = groupFields[level];
    const grouped = new Map<string, any[]>();

    rows.forEach(row => {
      const key = row[currentField] ?? "—";
      if (!grouped.has(key)) {
        grouped.set(key, []);
      }
      grouped.get(key)!.push(row);
    });

    return Array.from(grouped.entries()).map(([label, groupRows]) => ({
      label,
      cells: [],
      children: buildRows(groupRows, level + 1)
    }));
  };

  const dataRows = buildRows(data, 0);

  return (
    <div>
      <CustomDashboard data={dataRows} dates={dates} />
    </div>
  );
};

export default App;