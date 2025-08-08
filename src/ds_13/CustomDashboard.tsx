import React, { useState } from "react";
import "./CustomDashboard.css";

export type DataCell = {
  value: number | string | null;
  condition?: boolean;
};

export type DataRow = {
  label: string;
  cells: DataCell[];
  children?: DataRow[];
};

type Props = {
  data: DataRow[];
  dates: string[];
};

const transformDataWithSums = (data: DataRow[]): DataRow[] => {
  const transform = (row: DataRow): DataRow => {
    if (row.children && row.children.length > 0) {
      const newChildren = row.children.map(transform);
      const numCols = newChildren[0].cells.length;

      const summedCells: DataCell[] = Array.from({ length: numCols }, (_, colIdx) => {
        const sum = newChildren.reduce((acc, child) => {
          const val = child.cells[colIdx]?.value;
          return acc + (typeof val === "number" ? val : 0);
        }, 0);

        return { value: sum };
      });

      return {
        ...row,
        cells: summedCells,
        children: newChildren,
      };
    }
    return row;
  };

  return data.map(transform);
};

const CustomDashboard: React.FC<Props> = ({ data, dates }) => {
  const [collapsedKeys, setCollapsedKeys] = useState<Set<string>>(new Set());

  const toggleCollapse = (key: string) => {
    setCollapsedKeys(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const transformedData = transformDataWithSums(data);

  const renderRow = (row: DataRow, keyPrefix: string, level = 0): React.ReactNode => {
    const isCollapsed = collapsedKeys.has(keyPrefix);
    const canExpand = !!row.children && level <= 1;

    return (
      <>
        <tr
          key={keyPrefix}
          className={row.children ? "group-row" : ""}
          onClick={() => canExpand && toggleCollapse(keyPrefix)}
          style={{ cursor: canExpand ? "pointer" : "default" }}
        >
          <td
            className={row.children ? "group-label" : ""}
            style={{ paddingLeft: `${level * 20}px` }}
          >
            {canExpand && (
              <span className={`expand-icon ${!isCollapsed ? 'expanded' : ''}`}>
                {isCollapsed ? "[+]" : "[-]"}
              </span>
            )}
            {row.label}
          </td>
          {row.cells.map((cell, idx) => {
            const shouldHighlight = (level === 1 || level === 2) && cell.condition === true;
            return (
              <td
                key={`${keyPrefix}-${idx}`}
                className={shouldHighlight ? "cell-green" : ""}
              >
                {cell.value ?? "—"}
              </td>
            );
          })}
        </tr>
        {!isCollapsed &&
          row.children?.map((child, index) =>
            renderRow(child, `${keyPrefix}-child-${index}`, level + 1)
          )}
      </>
    );
  };


  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Показатель/город/район</th>
          {dates.map(date => (
            <th key={date}>{date}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {transformedData.map((row, index) =>
          renderRow(row, `row-${index}`, 0)
        )}
      </tbody>
    </table>
  );
};

export default CustomDashboard;
