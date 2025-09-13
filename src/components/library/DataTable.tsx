import React, { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, Loader2, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
  render?: (value: T[keyof T], record: T, index: number) => React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  rowKey?: keyof T | ((record: T) => string | number);
  size?: 'sm' | 'md' | 'lg';
  emptyText?: string;
  className?: string;
}

type SortOrder = 'asc' | 'desc' | null;

interface SortState {
  column: string | null;
  order: SortOrder;
}

function DataTable<T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
  rowKey = 'id',
  size = 'md',
  emptyText = 'No data available',
  className
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortState, setSortState] = useState<SortState>({ column: null, order: null });

  // Get row key function
  const getRowKey = useMemo(() => {
    if (typeof rowKey === 'function') {
      return rowKey;
    }
    return (record: T) => record[rowKey] as string | number;
  }, [rowKey]);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortState.column || !sortState.order) {
      return data;
    }

    const column = columns.find(col => col.key === sortState.column);
    if (!column) return data;

    return [...data].sort((a, b) => {
      const aValue = a[column.dataIndex];
      const bValue = b[column.dataIndex];

      if (aValue === bValue) return 0;

      let comparison = 0;
      if (aValue > bValue) {
        comparison = 1;
      } else if (aValue < bValue) {
        comparison = -1;
      }

      return sortState.order === 'desc' ? -comparison : comparison;
    });
  }, [data, sortState, columns]);

  // Handle sort
  const handleSort = (columnKey: string) => {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sortable) return;

    setSortState(prev => {
      if (prev.column !== columnKey) {
        return { column: columnKey, order: 'asc' };
      }
      if (prev.order === 'asc') {
        return { column: columnKey, order: 'desc' };
      }
      return { column: null, order: null };
    });
  };

  // Handle row selection
  const handleRowSelect = (record: T, checked: boolean) => {
    const newSelectedRows = checked
      ? [...selectedRows, record]
      : selectedRows.filter(row => getRowKey(row) !== getRowKey(record));
    
    setSelectedRows(newSelectedRows);
    onRowSelect?.(newSelectedRows);
  };

  // Handle select all
  const handleSelectAll = (checked: boolean) => {
    const newSelectedRows = checked ? [...sortedData] : [];
    setSelectedRows(newSelectedRows);
    onRowSelect?.(newSelectedRows);
  };

  // Check if row is selected
  const isRowSelected = (record: T) => {
    return selectedRows.some(row => getRowKey(row) === getRowKey(record));
  };

  // Check if all rows are selected
  const isAllSelected = sortedData.length > 0 && selectedRows.length === sortedData.length;
  const isIndeterminate = selectedRows.length > 0 && selectedRows.length < sortedData.length;

  // Size classes
  const sizeClasses = {
    sm: 'text-size-sm',
    md: 'text-size-base',
    lg: 'text-size-lg'
  };

  const cellPaddingClasses = {
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-4'
  };

  if (loading) {
    return (
      <div className={cn('bg-surface rounded-radius border border-border', className)}>
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center space-x-2 text-on-surface-variant">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('bg-surface rounded-radius border border-border overflow-hidden', className)}>
      <div className="overflow-x-auto">
        <table className={cn('table-base', sizeClasses[size])}>
          {/* Header */}
          <thead className="table-header">
            <tr>
              {selectable && (
                <th className={cn('table-cell', cellPaddingClasses[size])}>
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    ref={input => {
                      if (input) input.indeterminate = isIndeterminate;
                    }}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary focus:ring-2"
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={cn(
                    'table-cell font-semibold text-on-surface',
                    cellPaddingClasses[size],
                    column.sortable && 'cursor-pointer hover:bg-surface-variant transition-colors',
                    column.align === 'center' && 'text-center',
                    column.align === 'right' && 'text-right'
                  )}
                  style={{ width: column.width }}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.title}</span>
                    {column.sortable && (
                      <div className="flex flex-col">
                        <ChevronUp
                          className={cn(
                            'h-3 w-3 -mb-1',
                            sortState.column === column.key && sortState.order === 'asc'
                              ? 'text-primary'
                              : 'text-on-surface-variant'
                          )}
                        />
                        <ChevronDown
                          className={cn(
                            'h-3 w-3',
                            sortState.column === column.key && sortState.order === 'desc'
                              ? 'text-primary'
                              : 'text-on-surface-variant'
                          )}
                        />
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          
          {/* Body */}
          <tbody>
            {sortedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className={cn('table-cell text-center text-on-surface-variant', cellPaddingClasses[size])}
                >
                  <div className="flex flex-col items-center space-y-2 py-8">
                    <Search className="h-8 w-8 text-on-surface-variant opacity-50" />
                    <span>{emptyText}</span>
                  </div>
                </td>
              </tr>
            ) : (
              sortedData.map((record, index) => (
                <tr
                  key={getRowKey(record)}
                  className={cn(
                    'table-row',
                    isRowSelected(record) && 'bg-primary/5 border-primary/20'
                  )}
                >
                  {selectable && (
                    <td className={cn('table-cell', cellPaddingClasses[size])}>
                      <input
                        type="checkbox"
                        checked={isRowSelected(record)}
                        onChange={(e) => handleRowSelect(record, e.target.checked)}
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary focus:ring-2"
                      />
                    </td>
                  )}
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={cn(
                        'table-cell text-on-surface',
                        cellPaddingClasses[size],
                        column.align === 'center' && 'text-center',
                        column.align === 'right' && 'text-right'
                      )}
                    >
                      {column.render
                        ? column.render(record[column.dataIndex], record, index)
                        : String(record[column.dataIndex] || '')
                      }
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {/* Selection Summary */}
      {selectable && selectedRows.length > 0 && (
        <div className="px-4 py-3 bg-surface-variant border-t border-border text-size-sm text-on-surface-variant">
          {selectedRows.length} of {sortedData.length} row{sortedData.length !== 1 ? 's' : ''} selected
        </div>
      )}
    </div>
  );
}

export { DataTable };
export type { DataTableProps, Column };